import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZyOGfrPCUgLyWvabG_obRSAugCjQyvEg",
  authDomain: "spotta-6aa03.firebaseapp.com",
  projectId: "spotta-6aa03",
  storageBucket: "spotta-6aa03.appspot.com",
  messagingSenderId: "198962450798",
  appId: "1:198962450798:web:e37790ebd2eaee24ddf17f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)