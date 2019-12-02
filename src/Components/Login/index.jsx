import React from "react";
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

  let uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: async (authResult, redirectUrl) => {
        let user = authResult.user;
        let isNewUser = authResult.additionalUserInfo.isNewUser;
        if (isNewUser) {
          await db
            .collection("users")
            .doc(user.uid)
            .set({
              pseudo: user.displayName,
              email: user.email,
              img: "",
              role: "apply",
              creationTime: user.metadata.creationTime,
              lastSignInTime: user.metadata.lastSignInTime,
            });
          user.sendEmailVerification();
        } else {
          await db
            .collection("users")
            .doc(user.uid)
            .update({
              lastSignInTime: user.metadata.lastSignInTime,
            });
        }
        return true;
      },
    },
    signInSuccessUrl: "/",
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
  if (auth && !init) {
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
