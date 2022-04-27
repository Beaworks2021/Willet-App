import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmKuOE-qyCBO-xZ_zBLuiUlamF3lnQ0K4",
  authDomain: "willet-app-auth.firebaseapp.com",
  projectId: "willet-app-auth",
  storageBucket: "willet-app-auth.appspot.com",
  messagingSenderId: "949426097452",
  appId: "1:949426097452:web:16ed12283d19d8a515f089",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
