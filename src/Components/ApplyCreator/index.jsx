import React, { useState, useEffect } from "react";
import { Section, Box } from "react-bulma-components";
import TextareaAutosize from "react-autosize-textarea";
import { useLocation, useHistory } from "react-router-dom";
import { db, Firebase } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { applyHookUrl } from "../../discord";

const ApplyCreator = () => {
  let [auth, init] = useAuthState(Firebase.auth());
  const location = useLocation();
  const history = useHistory();
  const [apply, setApply] = useState(
    location.state
      ? location.state.data
      : ["", "", "", "", "", "", "", "", "", ""]
  );
  const [showError, setShowError] = useState(false);
  const [classes, setClasses] = useState([
    "input",
    "textarea",
    "textarea",
    "textarea",
    "textarea",
    "textarea",
    "radio",
    "textarea",
    "radio",
    "textarea",
  ]);

  useEffect(() => {
    document.title = "Nouvelle Candidature - Secret des Anciens";
  }, []);

  const editing = location.state ? true : false;

  const onChange = event => {
    const { name, value } = event.target;
    setApply(old => ({ ...old, [name]: value }));
  };

  const sendNotification = (name, id) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", applyHookUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        content: `Nouvelle candidature de ${name} ! @here\nhttp://secretdesanciens.fr/candidatures/${id}`,
        username: "Secret des Anciens",
      })
    );
  };

  const validateChange = () => {
    for (let field in apply) {
      if (!apply[field]) return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (validateChange()) {
      if (editing) {
        await db
          .collection("applies")
          .doc(location.state.id)
          .update({
            content: apply,
            editDate: new Date(),
          });
        history.goBack();
      } else {
        const ref = db.collection("applies");
        const newApply = await ref.add({
          author_id: auth.uid,
          content: apply,
          date: new Date(),
          state: "pending",
        });
        sendNotification(auth.displayName, newApply.id);
        history.push(`/candidatures/${newApply.id}`);
      }
    } else {
      setShowError(true);
      let arr = [];
      arr[0] = apply[0] ? "input" : "input is-danger";
      arr[1] = apply[1] ? "textarea" : "textarea is-danger";
      arr[2] = apply[2] ? "textarea" : "textarea is-danger";
      arr[3] = apply[3] ? "textarea" : "textarea is-danger";
      arr[4] = apply[4] ? "textarea" : "textarea is-danger";
      arr[5] = apply[5] ? "textarea" : "textarea is-danger";
      arr[6] = apply[6] ? "radio" : "radio has-text-danger";
      arr[7] = apply[7] ? "textarea" : "textarea is-danger";
      arr[8] = apply[8] ? "radio" : "radio has-text-danger";
      arr[9] = apply[9] ? "textarea" : "textarea is-danger";
      setClasses(arr);
    }
  };
  const onCancel = () => {
    history.push("/candidatures");
  };

  const sectionStyle = {
    marginTop: 60,
  };

  const fieldStyle = {
    width: "50%",
  };

  const CreationError = () => {
    return showError ? (
      <div className='notification is-danger' style={{ position: "relative" }}>
        Vous devez remplir tous les champs.
      </div>
    ) : null;
  };

  if (!init && !auth) {
    return (
      <section className='section'>
        <div
          className='notification is-danger'
          style={{ maxWidth: "50vw", position: "relative", left: "25%" }}
        >
          Vous devez vous connecter ou créer un compte pour acceder à cette
          section !
        </div>
      </section>
    );
  } else if (!init) {
    return (
      <div className='columns is-centered'>
        <div className='column is-6'>
          <Section>
            <h1 className='title has-text-left'>
              <b>{editing ? "Edition" : "Création"} de candidature</b>
            </h1>
            <Box className='has-text-left'>
              <Section className='is-size-5 has-text-justified'>
                <form>
                  <div>
                    <h1 className='title is-3 has-text-link'>
                      Nom du personnage:
                    </h1>
                    <div className='field'>
                      <div className='control'>
                        <input
                          style={fieldStyle}
                          className={classes[0]}
                          type='text'
                          placeholder='Nom du personnage'
                          name='0'
                          onChange={onChange}
                          value={apply[0]}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 50 }}>
                    <h1 className='title is-3 has-text-link'>
                      Depuis combien de temps jouez vous ?
                    </h1>
                    <div className='field'>
                      <div className='control'>
                        <TextareaAutosize
                          style={fieldStyle}
                          className={classes[1]}
                          placeholder='Depuis combien de temps jouez vous ?'
                          name='1'
                          onChange={onChange}
                          value={apply[1]}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={sectionStyle}>
                    <h1 className='title is-3 has-text-link'>
                      Quelles sont vos motivations pour entrer dans notre guilde
                      ?
                    </h1>
                    <TextareaAutosize
                      style={fieldStyle}
                      className={classes[2]}
                      placeholder='Quelles sont vos motivations pour entrer dans notre guilde ?'
                      rows={5}
                      name='2'
                      onChange={onChange}
                      value={apply[2]}
                    />
                  </div>
                  <div style={sectionStyle}>
                    <h1 className='title is-3 has-text-link'>
                      Vos anciennes guildes
                    </h1>

                    <TextareaAutosize
                      style={fieldStyle}
                      className={classes[3]}
                      placeholder='Vos anciennes guildes'
                      rows={5}
                      name='3'
                      onChange={onChange}
                      value={apply[3]}
                    />
                    <p className='help is-link'>
                      Indiquez dans quelles guildes vous avez été membre et les
                      raisons de votre départ.
                    </p>
                  </div>
                  <div style={sectionStyle}>
                    <h1 className='title is-3 has-text-link'>Présentez-vous</h1>
                    <TextareaAutosize
                      style={fieldStyle}
                      className={classes[4]}
                      placeholder='Présentez-vous'
                      rows={5}
                      name='4'
                      onChange={onChange}
                      value={apply[4]}
                    />
                    <p className='help is-link'>
                      Décrivez brièvement qui vous êtes : age, sexe,
                      étude/métier, passions...
                    </p>
                  </div>
                  <div style={sectionStyle}>
                    <h1 className='title is-3 has-text-link'>
                      Présentez-vous en jeu
                    </h1>
                    <TextareaAutosize
                      style={fieldStyle}
                      className={classes[5]}
                      placeholder='Présentez-vous en jeu'
                      rows={5}
                      name='5'
                      onChange={onChange}
                      value={apply[5]}
                    />
                    <p className='help is-link'>
                      Décrivez votre personnage (race, classe, spéc(s), ilvl,
                      expérience en donjons et raids avec un lien vers
                      l'armurerie et wowprogress ou raider.io) et vos objectifs
                      pour le faire progresser.
                    </p>
                  </div>
                  <div style={sectionStyle}>
                    <h1 className='title is-3 has-text-link'>
                      Avez-vous des personnages dans d'autres guildes ?
                    </h1>
                    <div className='control'>
                      <label className={classes[6]} style={{ marginRight: 10 }}>
                        <input
                          type='radio'
                          onChange={onChange}
                          name='6'
                          value='Oui'
                          checked={apply[6] === "Oui"}
                        />
                        Oui
                      </label>
                      <label className={classes[6]}>
                        <input
                          type='radio'
                          onChange={onChange}
                          name='6'
                          value='Non'
                          checked={apply[6] === "Non"}
                        />
                        Non
                      </label>
                    </div>
                  </div>
                  <div style={sectionStyle}>
                    <h1 className='title is-3 has-text-link'>
                      Si oui, indiquez le nom des guildes
                    </h1>
                    <TextareaAutosize
                      style={fieldStyle}
                      className={classes[7]}
                      placeholder='Si oui, indiquez le nom des guildes'
                      name='7'
                      onChange={onChange}
                      value={apply[7]}
                    />
                  </div>
                  <div style={sectionStyle}>
                    <h1 className='title is-3 has-text-link'>
                      Avez-vous un casque/micro ?
                    </h1>
                    <div className='control'>
                      <label className={classes[8]} style={{ marginRight: 10 }}>
                        <input
                          type='radio'
                          onChange={onChange}
                          name='8'
                          value='Oui'
                          checked={apply[8] === "Oui"}
                        />
                        Oui
                      </label>
                      <label className={classes[8]}>
                        <input
                          type='radio'
                          onChange={onChange}
                          name='8'
                          value='Non'
                          checked={apply[8] === "Non"}
                        />
                        Non
                      </label>
                    </div>
                  </div>
                  <div style={sectionStyle}>
                    <h1 className='title is-3 has-text-link'>
                      Combien d'heures jouez-vous par semaine ?
                    </h1>
                    <div className='field'>
                      <div className='control'>
                        <TextareaAutosize
                          style={fieldStyle}
                          className={classes[9]}
                          placeholder='Depuis combien de temps jouez vous ?'
                          name='9'
                          onChange={onChange}
                          value={apply[9]}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </Section>
            </Box>
            <CreationError />
            <div className='buttons'>
              <button className='button is-success' onClick={onSubmit}>
                Valider
              </button>
              <button className='button is-danger' onClick={onCancel}>
                Annuler
              </button>
            </div>
          </Section>
        </div>
      </div>
    );
  } else return null;
};

export default ApplyCreator;
