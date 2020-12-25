import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAXGtg0Ain664EK6ZjPcOqWgvIWAizaiyI",
    authDomain: "clone-fca51.firebaseapp.com",
    projectId: "clone-fca51",
    storageBucket: "clone-fca51.appspot.com",
    messagingSenderId: "210806859423",
    appId: "1:210806859423:web:d21632dd1b0499638ee4aa",
    measurementId: "G-17BK7PZGW8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };