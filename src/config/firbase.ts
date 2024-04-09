import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_APP_API_KEY,
  authDomain: "spotta-b129f.firebaseapp.com",
  projectId: "spotta-b129f",
  storageBucket: "spotta-b129f.appspot.com",
  messagingSenderId: "536686903228",
  appId: "1:536686903228:web:8b153eac85c931afa5b5b9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)