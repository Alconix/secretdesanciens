import React, { useState } from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase/app";
import { db, Firebase } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useHistory } from "react-router-dom";

const loginStyle = {
  paddingTop: "50px",
};

const Login = () => {
  const history = useHistory();
  const [auth, init] = useAuthState(Firebase.auth());
  const [logging, setLogging] = useState(false);

  let uiConfig = {
    signInFlow: "popup",
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        let user = authResult.user;
        let isNewUser = authResult.additionalUserInfo.isNewUser;
        setLogging(true);
        if (isNewUser) {
          db.collection("users")
            .doc(user.uid)
            .set({
              pseudo: user.displayName,
              email: user.email,
              img: "",
              role: "apply",
              creationTime: user.metadata.creationTime,
              lastSignInTime: user.metadata.lastSignInTime,
            })
            .then(() => {
              user.sendEmailVerification();
              history.push("/");
            });
        } else {
          db.collection("users")
            .doc(user.uid)
            .update({
              lastSignInTime: user.metadata.lastSignInTime,
            })
            .then(() => {
              history.push("/");
            });
        }
        return true;
      },
    },
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  };

  if (firebaseui.auth.AuthUI.getInstance()) {
    const ui = firebaseui.auth.AuthUI.getInstance();
    if (!auth && !init) ui.start("#firebaseui-auth-container", uiConfig);
  } else {
    const ui = new firebaseui.auth.AuthUI(Firebase.auth());
    if (!auth && !init) ui.start("#firebaseui-auth-container", uiConfig);
  }
  if (auth && !init && !logging) {
    return (
      <section className='section'>
        <div
          className='notification is-danger'
          style={{ maxWidth: "50vw", position: "relative", left: "25%" }}
        >
          Vous êtes déjà connecté !
        </div>
      </section>
    );
  } else if (!auth && !init)
    return <div id='firebaseui-auth-container' style={loginStyle}></div>;
  else return <div id='firebaseui-auth-container' style={loginStyle}></div>;
};

export default Login;
