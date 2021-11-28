import firebase from "firebase/compat"; 

const firebaseConfig = {
  apiKey: "AIzaSyDz20SjcX7jJ9k3MBriuZ-xUEDqRl9YT14",
  authDomain: "clone-6533c.firebaseapp.com",
  projectId: "clone-6533c",
  storageBucket: "clone-6533c.appspot.com",
  messagingSenderId: "68975303837",
  appId: "1:68975303837:web:c0266bc0046b9059ef4874"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };