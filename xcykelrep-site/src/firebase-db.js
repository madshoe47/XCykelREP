import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyDHWpFvyUJNB-TsMLrrAZohqvVIpGqKrxs",
        authDomain: "x-cykel-rep--contact.firebaseapp.com",
        projectId: "x-cykel-rep--contact",
        storageBucket: "x-cykel-rep--contact.appspot.com",
        messagingSenderId: "30260467456",
        appId: "1:30260467456:web:da806011998dbd2014c5e5"
    })
    .firestore();

export const postRef = db.collection("Contacts");
