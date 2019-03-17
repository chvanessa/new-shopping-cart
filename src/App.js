import React, { Component } from 'react';
import './App.css';
import ProductCard from './ProductCard.js';
import Cart from './Cart.js'
import Catalogue from './Catalogue.js'
import { Button } from 'semantic-ui-react'

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
      qty: 0
    };
  }

  addItem (item) {
    alert('YELELELELO we have added a new item')
    let cartlist = this.state.cart;
    let thecost = this.state.cost;
    let theqty = this.state.qty;
    cartlist.push(item);
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
      <div className="App">
          <Catalogue
            productList = {products}
            addItem = {this.addItem}/>
          <Cart
            thecart = {cart}
            cost = {cost}
            qty = {qty}
            removeItem = {this.removeItem}/>
          <Button>HI</Button>
    </div>
    );
  }
}

export default App;
