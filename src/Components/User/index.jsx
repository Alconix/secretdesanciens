import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useParams, useHistory } from "react-router-dom";
import { Box, Section, Modal } from "react-bulma-components";
import firebase from "firebase";

const User = () => {
  const [user, setUser] = useState({
    pseudo: "",
    role: "",
    img: "",
  });

  const [loaded, setLoaded] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [newPseudo, setNewPseudo] = useState("");
  const [newURL, setNewURL] = useState("");

  const [showModal, setShowModal] = useState(false);

  const { user_id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const userRef = db.collection("users").doc(user_id);
    userRef
      .get()
      .then(doc => {
        if (doc.exists) {
          setUser(doc.data());
        }
        setLoaded(true);
      })
      .catch(error => console.log(error));
  }, [user_id, user.role, user.pseudo, user.img]);

  const getGroup = () => {
    return user.role.charAt(0).toUpperCase() + user.role.slice(1);
  };

  const deleteAccount = () => {
    db.collection("users")
      .doc(user_id)
      .delete();
    firebase.auth().currentUser.delete();
    history.push("/");
    window.location.reload();
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const commitChanges = () => {
    let updatedUser = {};

    if (newPseudo !== user.pseudo) updatedUser["pseudo"] = newPseudo;
    if (newURL !== user.img) updatedUser["img"] = newURL;

    db.collection("users")
      .doc(user_id)
      .update(updatedUser);

    window.location.reload();
  };

  const EditButton = () => {
    if (!editMode)
      return (
        <button className='button is-info' onClick={toggleEdit}>
          Modifier
        </button>
      );
    else
      return (
        <div className='buttons'>
          <button className='button is-success' onClick={commitChanges}>
            Valider
          </button>
          <button className='button is-danger' onClick={toggleEdit}>
            Annuler
          </button>
        </div>
      );
  };

  const DeleteModal = () => {
    return (
      <Modal show={showModal} onClose={() => setShowModal(false)} closeOnBlur>
        <Modal.Content style={{ backgroundColor: "white" }}>
          <Section className='has-text-dark'>
            <h1 className='title has-text-dark'>Suppression du compte</h1>
            Voulez-vous vraiment supprimer votre compte ?
            <br />
            <button
              className='button is-danger is-pulled-right'
              onClick={deleteAccount}
            >
              Supprimer
            </button>
          </Section>
          <br />
        </Modal.Content>
      </Modal>
    );
  };

  if (!loaded) {
    return (
      <progress
        className='progress is-link'
        max='100'
        style={{
          width: "50vw",
          marginTop: "40vh",
          position: "relative",
          left: "25%",
        }}
      ></progress>
    );
  } else if (!user) {
    return <div>User not found ! :(</div>;
  } else {
    return (
      <div className='columns is-centered'>
        <DeleteModal />
        <div className='column is-6'>
          <Section>
            <Box>
              <article className='media'>
                <figure className='media-left'>
                  <p className='image is-128x128'>
                    <img
                      className='is-rounded'
                      alt='profile'
                      src={
                        user.img
                          ? user.img
                          : "https://firebasestorage.googleapis.com/v0/b/secretdesanciens.appspot.com/o/default-avatar.jpg?alt=media"
                      }
                    />
                  </p>
                </figure>
                <div className='media-content'>
                  <div className='content'>
                    <section className='section'>
                      <form>
                        <div style={{ height: "1.2em" }}>
                          <b>Pseudo: </b> {!editMode && user.pseudo}{" "}
                          {editMode && (
                            <input
                              className='input is-small'
                              type='text'
                              placeholder='Pseudo'
                              id='pseudo'
                              style={{ marginLeft: 20, width: "20vw" }}
                              value={newPseudo}
                              onChange={e => setNewPseudo(e.target.value)}
                            />
                          )}
                        </div>
                        <br />
                        <div style={{ height: "2.25em" }}>
                          <b>Groupe: </b> {getGroup()}
                        </div>
                        <div style={{ marginTop: 10 }}>
                          <b>Inscription: </b>
                          {user.creationTime}
                        </div>
                        <div style={{ marginTop: 20 }}>
                          <b>Dernière connexion: </b>
                          {user.lastSignInTime}
                        </div>
                        {editMode && (
                          <div style={{ marginTop: 15 }}>
                            <b>Image URL: </b>
                            <input
                              className='input is-small'
                              type='text'
                              placeholder='Pseudo'
                              id='pseudo'
                              style={{ marginLeft: 10, width: "20vw" }}
                              value={newURL}
                              onChange={e => setNewURL(e.target.value)}
                            />
                          </div>
                        )}
                        {!editMode && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </form>
                    </section>
                  </div>
                  <nav className='level'>
                    <div className='level-left'>
                      <div className='level-item'>
                        <EditButton />
                      </div>
                    </div>
                    <div className='level-right'>
                      <div className='level-item'>
                        <button
                          className='button is-danger'
                          onClick={() => setShowModal(true)}
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </article>
            </Box>
          </Section>
        </div>
      </div>
    );
  }
};

export default User;
