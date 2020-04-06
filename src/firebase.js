import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDmoBBXgXtjU69fpbLYhO3AIhrgNq9sfbQ",
  authDomain: "fir-authtest-76682.firebaseapp.com",
  databaseURL: "https://fir-authtest-76682.firebaseio.com",
  projectId: "fir-authtest-76682",
  storageBucket: "fir-authtest-76682.appspot.com",
  messagingSenderId: "349417193861",
  appId: "1:349417193861:web:71bab63473cfd9a2a504ec",
  measurementId: "G-S75WBPFR5C"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = firebase.auth();

