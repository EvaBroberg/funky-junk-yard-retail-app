import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMKByf_dkc_4vHuIH67nQyvjwbDSd40mU",
    authDomain: "retail-app-a65c4.firebaseapp.com",
    databaseURL: "https://retail-app-a65c4.firebaseio.com",
    projectId: "retail-app-a65c4",
    storageBucket: "retail-app-a65c4.appspot.com",
    messagingSenderId: "962919222815",
    appId: "1:962919222815:web:af0712516d1e76861ccf2a",
    measurementId: "G-EWL8BSZ13X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
