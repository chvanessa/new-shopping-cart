import React, { Component } from 'react';
import './App.css';

// replace app class with my classes //
class Cart extends Component {
  render() {
    return (
      <div>
        <div>
            <div className="pcard-container">
              <img
                src={require('./static/shopicon.png')}
                resizeMode="contain" />
              <button className="addToCartButton">Checkout</button>
            </div>
            <br/>
        </div>
      </div>
      )
  }
}
export default Cart;
