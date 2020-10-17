const firebase = require("firebase");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMwAweI783rVByTl7OByfVh6ttcQikUg4",
    authDomain: "discord-clone-3a4cf.firebaseapp.com",
    databaseURL: "https://discord-clone-3a4cf.firebaseio.com",
    projectId: "discord-clone-3a4cf",
    storageBucket: "discord-clone-3a4cf.appspot.com",
    messagingSenderId: "349494958513",
    appId: "1:349494958513:web:119e932230a7d045dfc590",
    measurementId: "G-4CXV8Z3MP7"
  };
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
