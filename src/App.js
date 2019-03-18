import React, { Component } from 'react';
import './App.css';
import ProductCard from './ProductCard.js';
import Cart from './Cart.js'
import Catalogue from './Catalogue.js'
import SizeFilter from './SizeFilter.js'
import Profile from './Profile.js'
import { Button } from 'semantic-ui-react'

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyDR60K2wtoKFVX1yR4v9_jR6mwptRQtk38",
  authDomain: "newshoppingcart-d427b.firebaseapp.com"
});

// replace app class with my classes //
class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.state = {
      products: [],
      cart: [],
      cost: 0,
      qty: 0,
      isSignedIn: false,
      currentUser: null,
    };
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  addItem (item, size) {
    alert('New item ' + item.title + ' has been added to cart!')
    let cartlist = this.state.cart;
    let thecost = this.state.cost;
    let theqty = this.state.qty;

  // Quantity
  //   const target = cartlist.find(thing => {
  //     if (thing[0] === item && thing[1] === size) {
  //       return thing;
  //     }
  //     return undefined;});
  //   if (target) {
  //     const ind = cartlist.indexOf(target);
  //     cartlist[ind].count += 1;
  //   }
  //   else {
  //     var count = 1;
  //   }
  //
    cartlist.push([item,size]);
    this.setState({
          cart: cartlist,
          cost: thecost + item.price,
          qty: theqty + 1
      })
  }

  removeItem (item) {
    alert('BYE BYE BYE')
    let cartlist = this.state.cart;
    let thecost = this.state.cost;
    let theqty = this.state.qty;
    for( var i = 0; i < cartlist.length; i++){
      if ( cartlist[i] === item) {
      cartlist.splice(i, 1);
   }
  }
  this.setState({
        cart: cartlist,
        cost: thecost - item.price,
        qty: theqty - 1
    })
}

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
    import("./static/data/products.json")
      .then(json => {
        this.setState({ products: json.products });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    const { products } = this.state;
    const { cart } = this.state;
    const { cost } = this.state;
    const { qty } = this.state;
    return (
      <div>

        {this.state.isSignedIn ? (
             <div className="profile">
             Welcome! <br/>
               <Profile
                 url={firebase.auth().currentUser.photoURL}
                 userName={firebase.auth().currentUser.displayName}
               />
               <button
                 class=" ui inverted red button mini log-out"
                 onClick={() => firebase.auth().signOut()}
               >
                 Sign out
               </button>
             </div>
           ) : (
             <StyledFirebaseAuth
               uiConfig={this.uiConfig}
               firebaseAuth={firebase.auth()}
             />
           )}
          <SizeFilter/>
          <Catalogue
            productList = {products}
            addItem = {this.addItem}/>
          <Cart
            thecart = {cart}
            cost = {cost}
            qty = {qty}
            removeItem = {this.removeItem}/>
    </div>
    );
  }
}

export default App;
