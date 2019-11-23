import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./firebaseConfig";

export const Firebase = firebase.initializeApp(firebaseConfig);
export const db = Firebase.firestore();
export const storage = Firebase.storage();
