import React, { Component } from 'react';
import './Cart.css';

// replace app class with my classes //
class Cart extends Component {
  render() {
    return (
        <div>
            <img className="cartImg" src={require('./static/shopicon.png')}/>
            <button className="addToCartButton">Checkout</button>
        </div>
      )
  }
}
export default Cart;
