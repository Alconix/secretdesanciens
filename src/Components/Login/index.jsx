import React from "react";
import * as firebaseui from "firebaseui";
import * as firebase from "firebase/app";
import { db } from "../../firebase";

import { useHistory } from "react-router-dom";

const loginStyle = {
  paddingTop: "50px",
};

const Login = () => {
  const history = useHistory();

  let uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        let user = authResult.user;
        let isNewUser = authResult.additionalUserInfo.isNewUser;
        if (isNewUser) {
          user.sendEmailVerification();
          db.collection("users")
            .doc(user.uid)
            .set({
              pseudo: user.displayName,
              email: user.email,
              img: "",
              role: "apply",
              creationTime: user.metadata.creationTime,
              lastSignInTime: user.metadata.lastSignInTime,
            });
        } else {
          db.collection("users")
            .doc(user.uid)
            .update({
              lastSignInTime: user.metadata.lastSignInTime,
            });
        }
        history.push("/");
        return true;
      },
    },
    signInSuccessUrl: "/",
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  };

  if (firebaseui.auth.AuthUI.getInstance()) {
    const ui = firebaseui.auth.AuthUI.getInstance();
    ui.start("#firebaseui-auth-container", uiConfig);
  } else {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  if (!firebase.auth().currentUser)
    return <div id='firebaseui-auth-container' style={loginStyle}></div>;
  else {
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
  }
};

export default Login;
