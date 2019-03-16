import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDR60K2wtoKFVX1yR4v9_jR6mwptRQtk38",
  authDomain: "newshoppingcart-d427b.firebaseapp.com",
  databaseURL: "https://newshoppingcart-d427b.firebaseio.com",
  projectId: "newshoppingcart-d427b",
  storageBucket: "newshoppingcart-d427b.appspot.com",
  messagingSenderId: "825149926057"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
