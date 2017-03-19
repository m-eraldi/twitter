import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB2pkQwn9732EHwIWKou2ASxK61IvhaSVg",
  authDomain: "twitter-clone-50910.firebaseapp.com",
  databaseURL: "https://twitter-clone-50910.firebaseio.com",
  storageBucket: "twitter-clone-50910.appspot.com",
  messagingSenderId: "287398740559"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;
