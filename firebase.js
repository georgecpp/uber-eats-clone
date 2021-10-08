// FOR WEB-BASED APPROACH, USING EXPO CLI.
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBdOd4ppF4Csxj6H7WZwU2vvqS3v4W-DUk",
    authDomain: "rn-uber-eats-clone-c6832.firebaseapp.com",
    projectId: "rn-uber-eats-clone-c6832",
    storageBucket: "rn-uber-eats-clone-c6832.appspot.com",
    messagingSenderId: "374107241045",
    appId: "1:374107241045:web:33e60264f9bd309cc6b2dc"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;