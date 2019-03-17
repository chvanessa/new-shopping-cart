import React, { Component } from 'react';
import './Cart.css';
import { Sidebar, Button, Icon } from "semantic-ui-react";
// const alist = ['shirt', 'shit', 'shite']

// replace app class with my classes //
class Cart extends Component {
  render() {
    const { thecart } = this.props;
    const { cost } = this.props;
    const { qty } = this.props;
    return (
      <div class="ui vertical labeled icon ui overlay right wide visible sidebar menu">
        <a class="item">
          <i aria-hidden="true" class="cart icon"></i>Shopping Cart

          {thecart.map(product => (
            <div> {product.title}
            <Button icon onClick={() => {this.props.removeItem(product)}}><Icon name='delete'/></Button></div>))}
          </a>
        <a class="item">
          <i aria-hidden="true" class="money icon"></i>Checkout
            <div> Your Total: {cost} <br/> Quantity: {qty} </div>
          </a>
      </div>

      )
  }
}
export default Cart;
