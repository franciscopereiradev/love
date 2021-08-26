import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCclgMhtrvHmdqecmNhr497Axyqb9mqlnI",
    authDomain: "loveyou-a51ae.firebaseapp.com",
    projectId: "loveyou-a51ae",
    storageBucket: "loveyou-a51ae.appspot.com",
    messagingSenderId: "437941160694",
    appId: "1:437941160694:web:3dd5cda4a01fca3b483ad7"
})

export { firebase }

export const db = firebase.firestore()