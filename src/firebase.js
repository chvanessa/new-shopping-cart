import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyA1Cep7SGgyL1fYBAyI1MkThjpz4JSMNcc",
  authDomain: "new-shopping-cart-fb.firebaseapp.com",
  databaseURL: "https://new-shopping-cart-fb.firebaseio.com",
  projectId: "new-shopping-cart-fb",
  storageBucket: "new-shopping-cart-fb.appspot.com",
  messagingSenderId: "737946350625"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
