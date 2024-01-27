// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADh9UDsPE6DcEJWUFEEiYIVR7_dqWwyms",
  authDomain: "kriya-test-env.firebaseapp.com",
  projectId: "kriya-test-env",
  storageBucket: "kriya-test-env.appspot.com",
  messagingSenderId: "917630612532",
  appId: "1:917630612532:web:be9d52f8d19967dee40661",
  measurementId: "G-55J6SWNLXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
export { db };
