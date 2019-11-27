import React, { useState, useEffect } from "react";
import { db, Firebase } from "../../firebase";
import { useParams } from "react-router-dom";
import { Box, Section, Modal } from "react-bulma-components";
import { useAuthState } from "react-firebase-hooks/auth";

const User = () => {
  const [user, setUser] = useState({
    pseudo: "",
    role: "",
    img: "",
  });

  const [auth, init] = useAuthState(Firebase.auth());

  const [loaded, setLoaded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [newPseudo, setNewPseudo] = useState("");
  const [newURL, setNewURL] = useState("");
  const [currentUser, setCurrentUser] = useState();

  const [showModal, setShowModal] = useState(false);

  const { user_id } = useParams();

  useEffect(() => {
    const userRef = db.collection("users").doc(user_id);
    userRef
      .get()
      .then(doc => {
        if (doc.exists) {
          document.title = `${doc.data().pseudo} - Secret des Anciens`;
          setUser(doc.data());
          setNewPseudo(doc.data().pseudo);
          setNewURL(doc.data().img);
          setNewRole(doc.data().role);
        } else {
          setUser(null);
        }
        setLoaded(true);
      })
      .catch(error => console.log(error));

    const fetchData = async () => {
      const userDoc = await db
        .collection("users")
        .doc(user_id)
        .get();
      if (userDoc.exists) {
        document.title = `${userDoc.data().pseudo} - Secret des Anciens`;
        setUser(userDoc.data());
        setNewPseudo(userDoc.data().pseudo);
        setNewURL(userDoc.data().img);
        setNewRole(userDoc.data().role);
      }

      const currentUserDoc = await db
        .collection("users")
        .doc(auth.uid)
        .get();
      setCurrentUser(currentUserDoc.data());

      setLoaded(true);
    };

    if (!init) fetchData();
  }, [user_id, init, auth]);

  const getGroup = () => {
    return user.role.charAt(0).toUpperCase() + user.role.slice(1);
  };

  const deleteAccount = () => {
    db.collection("users")
      .doc(user_id)
      .delete();
    auth.delete();
    window.location.assign("/");
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const commitChanges = async () => {
    let updatedUser = {};

    if (newPseudo !== user.pseudo) {
      updatedUser["pseudo"] = newPseudo;
      auth.updateProfile({ displayName: newPseudo });
    }

    if (newURL !== user.img) {
      updatedUser["img"] = newURL;
      auth.updateProfile({ photoURL: newURL });
    }

    if (newRole !== user.role) {
      updatedUser["role"] = newRole;
    }

    await db
      .collection("users")
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
            <p>Voulez-vous vraiment supprimer votre compte ?</p>
            <p>Cette action est irreversible.</p>
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

  console.log(newRole);

  if (!loaded && !init) {
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
  } else if (!user && !init) {
    return <Section>User not found ! :(</Section>;
  } else if (!init) {
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
                          <b>Groupe: </b> {!editMode && getGroup()}{" "}
                          {editMode &&
                            (currentUser.role === "admin" ||
                              currentUser.role === "officier") && (
                              <div
                                className='select is-link is-small'
                                style={{ marginRight: 7, marginLeft: 7 }}
                              >
                                <select
                                  onChange={e => {
                                    console.log(e.target.value.toLowerCase());
                                    setNewRole(e.target.value.toLowerCase());
                                  }}
                                  value={
                                    newRole.charAt(0).toUpperCase() +
                                    newRole.slice(1)
                                  }
                                >
                                  {currentUser.role === "admin" && (
                                    <option>Admin</option>
                                  )}
                                  {(currentUser.role === "officier" ||
                                    currentUser.role === "admin") && (
                                    <option>Officier</option>
                                  )}
                                  <option>Membre</option>
                                  <option>Apply</option>
                                </select>
                              </div>
                            )}
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
                              placeholder='Img URL'
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
                  {auth && auth.uid === user_id && (
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
                  )}
                </div>
              </article>
            </Box>
          </Section>
        </div>
      </div>
    );
  } else return null;
};

export default User;
