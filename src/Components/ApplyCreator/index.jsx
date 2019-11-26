import React, { useState } from "react";
import { Section, Box } from "react-bulma-components";
import TextareaAutosize from "react-autosize-textarea";
import { useLocation, useHistory } from "react-router-dom";
import { db, Firebase } from "../../firebase";

const ApplyCreator = props => {
  const location = useLocation();
  const history = useHistory();
  const [apply, setApply] = useState(
    location.state
      ? location.state.data
      : ["", "", "", "", "", "", "", "", "", ""]
  );

  const editing = location.state ? true : false;

  const onChange = event => {
    const { name, value } = event.target;
    setApply(old => ({ ...old, [name]: value }));
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
      } else {
        const ref = db.collection("applies");
        await ref.add({
          author_id: Firebase.auth().currentUser.uid,
          content: apply,
          date: new Date(),
          state: "pending",
        });
      }
      history.replace(`/candidatures/${location.state.id}`);
    } else {
      console.log("KO");
    }
  };

  const onCancel = () => {
    if (editing) {
      history.replace(`/candidatures/${location.state.id}`);
    } else history.go(-1);
  };

  const sectionStyle = {
    marginTop: 60,
  };

  const fieldStyle = {
    width: "50%",
  };

  console.log(apply);

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
                        className='input'
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
                        className='textarea'
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
                    Quelles sont vos motivations pour entrer dans notre guilde ?
                  </h1>
                  <TextareaAutosize
                    style={fieldStyle}
                    className='textarea'
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
                    className='textarea'
                    placeholder='Vos anciennes guildes'
                    rows={5}
                    name='3'
                    onChange={onChange}
                    value={apply[3]}
                  />
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>Présentez-vous</h1>
                  <TextareaAutosize
                    style={fieldStyle}
                    className='textarea'
                    placeholder='Présentez-vous'
                    rows={5}
                    name='4'
                    onChange={onChange}
                    value={apply[4]}
                  />
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>
                    Présentez-vous en jeu
                  </h1>
                  <TextareaAutosize
                    style={fieldStyle}
                    className='textarea'
                    placeholder='Présentez-vous en jeu'
                    rows={5}
                    name='5'
                    onChange={onChange}
                    value={apply[5]}
                  />
                </div>
                <div style={sectionStyle}>
                  <h1 className='title is-3 has-text-link'>
                    Avez-vous des personnages dans d'autres guildes ?
                  </h1>
                  <div className='control'>
                    <label className='radio' style={{ marginRight: 10 }}>
                      <input
                        type='radio'
                        onChange={onChange}
                        name='6'
                        value='Oui'
                        checked={apply[6] === "Oui"}
                      />
                      Oui
                    </label>
                    <label className='radio'>
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
                    className='textarea'
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
                    <label className='radio' style={{ marginRight: 10 }}>
                      <input
                        type='radio'
                        onChange={onChange}
                        name='8'
                        value='Oui'
                        checked={apply[8] === "Oui"}
                      />
                      Oui
                    </label>
                    <label className='radio'>
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
                      <input
                        style={{ width: "50%" }}
                        className='input'
                        type='text'
                        placeholder="Combien d'heures jouez-vous par semaine ?"
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
};

export default ApplyCreator;
