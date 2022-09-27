import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzipMax4bb31nUZ4MKrv64jQR9d_eLtao",
    authDomain: "projetoead-79b73.firebaseapp.com",
    projectId: "projetoead-79b73",
    storageBucket: "projetoead-79b73.appspot.com",
    messagingSenderId: "797579293306",
    appId: "1:797579293306:web:75dc503b330e7e690841c3"
  };


  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  