const functions = require("firebase-functions");
const admin = require("firebase-admin");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

/* admin.initializeApp();

exports.createUser = functions.auth.user().onCreate(user => {
  const newUser = {
    email: user.email,
    name: user.displayName,
    role: "apply",
    img: "",
  };
  console.log(user);
  console.log(newUser);

  const doc = admin
    .firestore()
    .collection("users")
    .doc(user.uid);
  console.log(doc);
  return doc
    .set(newUser)
    .then(() => console.log(`Created user: ${user.email}`))
    .catch(error => console.log(`Error: ${error}`));
}); */
