import firebase from 'firebase/app';
import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyBW_jOmPh2tKXi_jkz7XvCF1XvoX3e7dJE",
    authDomain: "react-signup-test.firebaseapp.com",
    databaseURL: "https://react-signup-test.firebaseio.com",
    projectId: "react-signup-test",
    storageBucket: "react-signup-test.appspot.com",
    messagingSenderId: "980797869587"
  };


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
