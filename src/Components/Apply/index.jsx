import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Section, Box, Modal } from 'react-bulma-components';
import { db, Firebase } from '../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import TextareaAutosize from 'react-autosize-textarea';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';

import Comment from '../Comment';
import { logHookUrl } from '../../discord';

const Apply = () => {
  const [loaded, setLoaded] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [apply, setApply] = useState();
  const [commentList, setCommentList] = useState([]);
  const [hasVoted, setVoted] = useState(false);
  const [editing, setEditing] = useState();
  const [editContent, setEditContent] = useState();
  const [statut, setStatut] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [rio, setRio] = useState();
  const [emojiPickerState, setEmojiPicker] = useState(false);

  const { apply_id } = useParams();
  const [auth, init] = useAuthState(Firebase.auth());

  console.log(rio);

  const sectionStyle = {
    marginTop: 60,
  };

  const history = useHistory();

  useEffect(() => {
    const deleteComment = async (id) => {
      await db.collection('applies').doc(apply_id).collection('comments').doc(id).delete();

      setCommentList((old) => old.filter((c) => c.key !== id));
    };

    const getData = async () => {
      let upvotes = 0;
      let downvotes = 0;

      const ref = db.collection('applies').doc(apply_id);
      let currentUserRef = await db.collection('users').doc(auth.uid).get();
      let currentApply = await ref.get();
      if (!currentApply.exists) {
        setLoaded(true);
        return;
      }
      let refComments = await ref.collection('comments').orderBy('date').get();
      let refVotes = await ref.collection('votes').get();

      let authorRef = await db.collection('users').doc(currentApply.data().author_id).get();

      const thisAuthor = authorRef.data()
        ? authorRef.data()
        : {
            pseudo: '[deleted]',
            role: 'deleted',
          };
      setAuthor(thisAuthor);
      setCurrentUser(currentUserRef.data());
      setStatut(currentApply.data().state);

      let array = [];
      for (let commentRef of refComments.docs) {
        const comment = commentRef.data();
        const commentDate = new Date(comment.date.seconds * 1000).toLocaleString('fr-FR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
        let commentEditDate = '';
        if (comment.editDate) {
          commentEditDate = new Date(comment.editDate.seconds * 1000).toLocaleString('fr-FR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          });
        }
        const authorRef = db.collection('users').doc(comment.author_id);
        const author = await authorRef.get();

        const thisCommentUser = author.data()
          ? author.data()
          : {
              pseudo: '[deleted]',
              role: 'deleted',
            };

        let nameStyle = '';
        if (thisCommentUser.role === 'membre') {
          nameStyle = 'is-3 subtitle has-text-info';
        } else if (thisCommentUser.role === 'officier') {
          nameStyle = 'is-3 subtitle has-text-warning';
        } else if (thisCommentUser.role === 'admin') {
          nameStyle = 'is-3 subtitle has-text-warning';
        } else if (thisCommentUser.role === 'apply') {
          nameStyle = 'is-3 subtitle has-text-link';
        } else if (thisCommentUser.role === 'deleted') {
          nameStyle = 'is-3 subtitle has-text-light';
        }

        array.push(
          <Comment
            key={commentRef.id}
            img={thisCommentUser.img}
            pseudo={thisCommentUser.pseudo}
            userId={comment.author_id}
            nameStyle={nameStyle}
            commentDate={commentDate}
            editDate={commentEditDate}
            content={comment.content}
            controlButtons={auth.uid === comment.author_id}
            onEdit={() => {
              setEditing(commentRef.id);
              setEditContent(comment.content);
              scrollToBottom();
            }}
            onDelete={() => {
              deleteComment(commentRef.id);
            }}
          />
        );

        setCommentList(array);
      }

      for (let vote of refVotes.docs) {
        if (vote.data().value === 1) upvotes++;
        if (vote.data().value === -1) downvotes++;
      }

      let formattedEditDate = null;
      if (currentApply.data().editDate) {
        formattedEditDate = new Date(currentApply.data().editDate.seconds * 1000).toLocaleString(
          'fr-FR',
          {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          }
        );
      }

      setApply({
        upvotes,
        downvotes,
        date: new Date(currentApply.data().date.seconds * 1000).toLocaleString('fr-FR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
        content: currentApply.data().content,
        state: currentApply.data().state,
        author_id: currentApply.data().author_id,
        editDate: formattedEditDate,
      });
      document.title = `Candidature de ${thisAuthor.pseudo} - Secret des Anciens`;

      const getRio = async () => {
        let name = currentApply.data().content[0].split('-')[0];
        let realm = currentApply.data().content[0].split('-')[1];
        if (!realm || !name) return null;
        realm.trim();
        realm = realm.replace(/'/g, '');
        realm = encodeURI(realm);
        name = encodeURI(name);
        if (/[Cc]hants ?[ée]ternels/.test(realm)) realm = 'chantséternels';
        const apiResponse = await fetch(
          `https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${name}&fields=gear%2Craid_progression%2Cmythic_plus_best_runs%2Cmythic_plus_scores_by_season%3Acurrent%2Craid_progression`
        );
        if (apiResponse.status === 200) return apiResponse.json();
        else return null;
      };
      setRio(await getRio());
      setLoaded(true);
    };

    if (!init && auth) getData();
  }, [apply_id, auth, init]);

  const raidProgress = () => {
    if (
      rio &&
      rio.raid_progression &&
      rio.raid_progression['castle-nathria'] &&
      rio.raid_progression['castle-nathria'].summary
    )
      return rio.raid_progression['castle-nathria'].summary;
    return 'N/A';
  };

  const bestMplus = () => {
    if (
      rio &&
      rio.mythic_plus_best_runs &&
      rio.mythic_plus_best_runs[0] &&
      rio.mythic_plus_best_runs[0].mythic_level
    )
      return rio.mythic_plus_best_runs[0].mythic_level;
    return 'N/A';
  };

  const scoreMplus = () => {
    if (
      rio &&
      rio.mythic_plus_scores_by_season &&
      rio.mythic_plus_scores_by_season[0] &&
      rio.mythic_plus_scores_by_season[0].scores.all
    )
      return rio.mythic_plus_scores_by_season[0].scores.all;
    return 'N/A';
  };

  const sendNotification = (msg) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', logHookUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(
      JSON.stringify({
        content: msg,
        username: 'Secret des Anciens',
      })
    );
  };

  const deleteComment = async (id) => {
    await db.collection('applies').doc(apply_id).collection('comments').doc(id).delete();

    setCommentList((old) => old.filter((c) => c.key !== id));
  };

  const getNameStyle = (role) => {
    let nameStyle = '';
    if (role === 'membre') {
      nameStyle = 'is-3 subtitle has-text-info';
    } else if (role === 'officier') {
      nameStyle = 'is-3 subtitle has-text-warning';
    } else if (role === 'admin') {
      nameStyle = 'is-3 subtitle has-text-warning';
    } else if (role === 'apply') {
      nameStyle = 'is-3 subtitle has-text-link';
    }
    return nameStyle;
  };

  const scrollToBottom = () => {
    var scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };

  const editComment = async () => {
    const newDate = new Date();
    if (!editContent) return;
    await db.collection('applies').doc(apply_id).collection('comments').doc(editing).update({
      content: editContent,
      editDate: newDate,
    });

    const index = commentList.findIndex((c) => c.key === editing);

    const commentRef = await db
      .collection('applies')
      .doc(apply_id)
      .collection('comments')
      .doc(editing)
      .get();

    const formattedDate = newDate.toLocaleString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    const originDate = new Date(commentRef.data().date.seconds * 1000);
    const formattedOriginDate = originDate.toLocaleString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    const createdComment = (
      <Comment
        key={commentRef.id}
        img={currentUser.img}
        pseudo={currentUser.pseudo}
        userId={auth.uid}
        nameStyle={getNameStyle(currentUser.role)}
        commentDate={formattedOriginDate}
        editDate={formattedDate}
        content={editContent}
        controlButtons={true}
        onEdit={() => {
          setEditing(commentRef.id);
          setEditContent(editContent);
          scrollToBottom();
        }}
        onDelete={() => {
          deleteComment(commentRef.id);
        }}
      />
    );

    const newList = [...commentList];
    newList.splice(index, 1, createdComment);

    setCommentList(newList);

    setEditing('');
    setEditContent('');
  };

  const publishComment = async () => {
    const newDate = new Date();

    if (!newComment) return;
    const commentRef = await db.collection('applies').doc(apply_id).collection('comments').add({
      author_id: auth.uid,
      content: newComment,
      date: newDate,
    });

    const formattedDate = newDate.toLocaleString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    const createdComment = (
      <Comment
        key={commentRef.id}
        img={currentUser.img}
        pseudo={currentUser.pseudo}
        userId={auth.uid}
        nameStyle={getNameStyle(currentUser.role)}
        commentDate={formattedDate}
        editDate={null}
        controlButtons={true}
        content={newComment}
        onEdit={() => {
          setEditing(commentRef.id);
          setEditContent(newComment);
          scrollToBottom();
        }}
        onDelete={() => {
          deleteComment(commentRef.id);
        }}
      />
    );

    setCommentList((old) => [...old, createdComment]);
    setNewComment('');
  };

  const handleVote = async (value) => {
    const voteRef = db.collection('applies').doc(apply_id).collection('votes');
    const oldVote = await voteRef.doc(auth.uid).get();
    await voteRef.doc(auth.uid).set({
      user_id: auth.uid,
      value,
    });

    if (!oldVote.exists) {
      if (value === 1) setApply({ ...apply, upvotes: apply.upvotes + 1 });
      if (value === -1) setApply({ ...apply, downvotes: apply.downvotes + 1 });
      setVoted(true);
    } else if (oldVote.data().value === 1 && value === -1) {
      setApply({
        ...apply,
        downvotes: apply.downvotes + 1,
        upvotes: apply.upvotes - 1,
      });
      setVoted(true);
    } else if (oldVote.data().value === -1 && value === 1) {
      setApply({
        ...apply,
        downvotes: apply.downvotes - 1,
        upvotes: apply.upvotes + 1,
      });
      setVoted(true);
    }

    setTimeout(() => setVoted(false), 2000);
  };

  const VoteConfirmation = () => {
    return hasVoted ? (
      <div className='notification is-success' style={{ position: 'relative' }}>
        Vote prit en compte.
      </div>
    ) : (
      <div></div>
    );
  };

  const changeStatut = async (e) => {
    let statut = e.target.value;
    let value = '';
    if (statut === 'En test') value = 'test';
    if (statut === 'En attente') value = 'pending';
    if (statut === 'Accepté') value = 'accept';
    if (statut === 'Refusé') value = 'reject';
    if (value) {
      await db.collection('applies').doc(apply_id).update({
        state: value,
      });
    }

    const date = new Date();
    sendNotification(
      `**[EDIT][${date.toLocaleString()}]** ${currentUser.pseudo} changed ${
        author.pseudo
      }'s apply to ${value}`
    );

    setStatut(value);
  };

  const getValue = (statut) => {
    if (statut === 'test') return 'En test';
    if (statut === 'pending') return 'En attente';
    if (statut === 'accept') return 'Accepté';
    if (statut === 'reject') return 'Refusé';
    return '';
  };

  const canVote = () => {
    return (
      currentUser.role === 'membre' ||
      currentUser.role === 'officier' ||
      currentUser.role === 'admin'
    );
  };

  const canModerate = () => {
    return currentUser.role === 'officier' || currentUser.role === 'admin';
  };

  const canEdit = () => {
    return (
      currentUser.role === 'admin' ||
      currentUser.role === 'officier' ||
      auth.uid === apply.author_id
    );
  };

  const deleteApply = async () => {
    const votes = await db.collection('applies').doc(apply_id).collection('votes').get();
    for (let vote of votes.docs) {
      await vote.ref.delete();
    }

    const comments = await db.collection('applies').doc(apply_id).collection('comments').get();
    for (let comment of comments.docs) {
      await comment.ref.delete();
    }

    const date = new Date();
    sendNotification(
      `**[DELETE][${date.toLocaleString()}]** ${currentUser.pseudo} deleted apply from ${
        author.pseudo
      }`
    );

    await db.collection('applies').doc(apply_id).delete();

    history.push('/candidatures');
  };

  const editApply = () => {
    window.scrollTo(0, 0);
    history.push({
      pathname: '/candidatures/create',
      state: { data: apply.content, id: apply_id },
    });
  };

  const DeleteModal = () => {
    return (
      <Modal show={showModal} onClose={() => setShowModal(false)} closeOnBlur>
        <Modal.Content style={{ backgroundColor: 'white' }}>
          <Section className='has-text-dark'>
            <h1 className='title has-text-dark'>Suppression de la candidature</h1>
            <p>Voulez-vous vraiment supprimer cette candidature ?</p>
            <p>Cette action est irreversible.</p>
            <br />
            <button className='button is-danger is-pulled-right' onClick={deleteApply}>
              Supprimer
            </button>
          </Section>
          <br />
        </Modal.Content>
      </Modal>
    );
  };

  if (!init && !auth) {
    return (
      <section className='section'>
        <div
          className='notification is-danger'
          style={{ maxWidth: '50vw', position: 'relative', left: '25%' }}
        >
          Vous devez vous connecter ou créer un compte pour acceder à cette section !
        </div>
      </section>
    );
  } else if (!init && !loaded) {
    return (
      <progress
        className='progress is-link'
        max='100'
        style={{
          width: '50vw',
          marginTop: '40vh',
          position: 'relative',
          left: '25%',
        }}
      ></progress>
    );
  } else if (!apply && !init) {
    return <Section>Apply not found !</Section>;
  } else if (!init && apply.content) {
    return (
      <div className='columns is-centered'>
        <DeleteModal />
        <div className='column is-6'>
          <Section>
            <h1 className='title has-text-left'>
              <b>
                Candidature de{' '}
                <a href={`/users/${apply.author_id}`} className='has-text-link'>
                  {author.pseudo}
                </a>
              </b>
            </h1>
            <h1 className='subtitle has-text-left'>
              {apply.date}
              {apply.editDate && ` - Edité le ${apply.editDate}`}
            </h1>
            <Box className='has-text-left'>
              <Section className='is-size-5 has-text-justified'>
                <nav className='level'>
                  <div className='level-left'>
                    <div>
                      <h1 className='title is-3 has-text-link'>Nom du personnage:</h1>
                      <span>{apply.content[0]}</span>
                    </div>
                  </div>
                  <div className='level-right'>
                    <p className='image is-128x128'>
                      <img
                        className='is-rounded'
                        src={
                          author.img
                            ? author.img
                            : 'https://firebasestorage.googleapis.com/v0/b/secretdesanciens.appspot.com/o/default-avatar.jpg?alt=media'
                        }
                        alt='profile'
                      ></img>
                    </p>
                  </div>
                </nav>

                <div style={{ marginTop: 50 }}>
                  <h1 className='title is-3 has-text-link'>Depuis combien de temps jouez vous ?</h1>
                  <span>{apply.content[1]}</span>
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>
                    Quelles sont vos motivations pour entrer dans notre guilde ?
                  </h1>
                  <span>{apply.content[2]}</span>
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>Vos anciennes guildes</h1>
                  <span>{apply.content[3]}</span>
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>Présentez-vous</h1>
                  <span>{apply.content[4]}</span>
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>Présentez-vous en jeu</h1>
                  <span>{apply.content[5]}</span>
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>
                    Avez-vous des personnages dans d'autres guildes ?
                  </h1>
                  <span>{apply.content[6]}</span>
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>Si oui, indiquez le nom des guildes</h1>
                  <span>{apply.content[7]}</span>
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>Avez-vous un casque/micro ?</h1>
                  <span>{apply.content[8]}</span>
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>
                    Combien d'heures jouez-vous par semaine ?
                  </h1>
                  <span>{apply.content[9]}</span>
                </div>

                {canVote() &&
                  (rio ? (
                    <div style={sectionStyle}>
                      <p>
                        Raider.IO :{' '}
                        <a href={rio.profile_url} target='_blank' rel='noopener noreferrer'>
                          {rio.profile_url}
                        </a>
                      </p>
                      <p>
                        Score mythic+ : {scoreMplus()}
                        <span style={{ marginLeft: '15px' }}>Meilleure M+ : {bestMplus()}</span>
                      </p>
                      <p>Progress raid : {raidProgress()}</p>
                    </div>
                  ) : (
                    <div style={{ ...sectionStyle, color: 'red' }}>
                      Impossible de trouver le personnage.
                    </div>
                  ))}
              </Section>
            </Box>
            <VoteConfirmation />
            <Box>
              <nav className='level'>
                <div className='level-left'>
                  {canVote() && (
                    <div className='buttons'>
                      <button
                        className='button is-success'
                        onClick={() => {
                          handleVote(1);
                        }}
                      >
                        <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: 5 }} />
                        Pour ({apply.upvotes})
                      </button>
                      <button
                        className='button is-danger'
                        onClick={() => {
                          handleVote(-1);
                        }}
                      >
                        <FontAwesomeIcon icon={faThumbsDown} style={{ marginRight: 5 }} />
                        Contre ({apply.downvotes})
                      </button>
                    </div>
                  )}
                </div>
                <div className='level-right'>
                  {canModerate() && (
                    <>
                      <span>Statut:</span>
                      <div
                        className='select is-info is-small'
                        style={{ marginRight: 7, marginLeft: 7 }}
                      >
                        <select onChange={changeStatut} value={getValue(statut)}>
                          <option>En attente</option>
                          <option>En test</option>
                          <option>Accepté</option>
                          <option>Refusé</option>
                        </select>
                      </div>
                    </>
                  )}
                  {canEdit() && (
                    <div className='buttons'>
                      <button className='button is-info' onClick={editApply}>
                        Modifier
                      </button>
                      <button className='button is-danger' onClick={() => setShowModal(true)}>
                        Supprimer
                      </button>
                    </div>
                  )}
                </div>
              </nav>
            </Box>

            {commentList.length !== 0 && (
              <h1 className='title has-text-left'>
                <b>Commentaires</b>
              </h1>
            )}
            {commentList}
            <h1 className='title has-text-left'>
              {!editing && <b>Nouveau Commentaire</b>}
              {editing && <b>Edition</b>}
            </h1>
            <TextareaAutosize
              style={{ marginBottom: 10, color: 'black' }}
              className='textarea is-size-5'
              placeholder='Commentaire ...'
              rows={6}
              value={editing ? editContent : newComment}
              onChange={(e) => {
                e.target.style.height = 'inherit';
                e.target.style.height = `${e.target.scrollHeight}px`;
                if (!editing) setNewComment(e.target.value);
                if (editing) setEditContent(e.target.value);
              }}
            />
            <div className='level' style={{ position: 'relative' }}>
              <div className='buttons level-left'>
                {!editing && (
                  <button className='button is-success' onClick={publishComment}>
                    Publier
                  </button>
                )}
                {editing && (
                  <>
                    <button className='button is-success' onClick={editComment}>
                      Editer
                    </button>
                    <button
                      className='button is-danger'
                      onClick={() => {
                        setEditContent('');
                        setEditing('');
                      }}
                    >
                      Annuler
                    </button>
                  </>
                )}
              </div>
              {emojiPickerState && (
                <Picker
                  title='Choisir un emoji'
                  emoji='point_up'
                  theme='dark'
                  style={{ position: 'absolute', bottom: 0, right: '-45%' }}
                  onSelect={(emoji) => {
                    if (!editing) setNewComment(newComment + emoji.native);
                    if (editing) setEditContent(editContent + emoji.native);
                  }}
                />
              )}
              <button
                className='button is-rounded level-right'
                onClick={() => {
                  setEmojiPicker(!emojiPickerState);
                }}
              >
                Emojis
              </button>
            </div>
          </Section>
        </div>
      </div>
    );
  } else return null;
};

export default Apply;
