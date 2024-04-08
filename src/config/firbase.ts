import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSe3fHiZwwj3uvI9t79h6l9HYE4jLh1js",
  authDomain: "spotta-9721f.firebaseapp.com",
  projectId: "spotta-9721f",
  storageBucket: "spotta-9721f.appspot.com",
  messagingSenderId: "825075792293",
  appId: "1:825075792293:web:68f19696cea3b50fb9d04c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)