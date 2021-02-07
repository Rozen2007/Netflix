import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBliEoVuC7V830Avm5jKW1UoTcAGKl0TzQ",
  authDomain: "netflix-7337c.firebaseapp.com",
  projectId: "netflix-7337c",
  storageBucket: "netflix-7337c.appspot.com",
  messagingSenderId: "648351623590",
  appId: "1:648351623590:web:cf1156d4088cb823348767",
  measurementId: "G-D88E36NPCH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
