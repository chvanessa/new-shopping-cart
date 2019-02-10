import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard.js';
// import productData from './static/data/products.json'
import AutoGrid from './grid.js' //added
import ProductPage from './ProductPage.js'
import Cart from './Cart.js'

// replace app class with my classes //
class App extends Component {
  render() {
    // let productList = productData.products   //<ProductCard products = {productList} />
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Hello this is the shopping cart.
          </p>
          <ProductPage/>
          <Cart/>
        </header>
      </div>
    );
  }
}

export default App;
