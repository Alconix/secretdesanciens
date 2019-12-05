const functions = require("firebase-functions");
const admin = require("firebase-admin");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/* 
admin.initializeApp();

exports.createUser = functions.auth.user().onCreate(async user => {
  const newUser = {
    email: user.email,
    pseudo: user.email.match(/^([^@]*)@/)[1],
    role: "apply",
    img: "",
    creationTime: new Date(),
  };

  return await admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set(newUser)
    .then(() => console.log(`User created: ${user.email}`))
    .catch(error => console.log(`Error: ${error}`));
});
 */
