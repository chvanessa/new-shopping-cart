import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard.js';
import productData from './static/data/products.json'
//import productImg from './static/products'
//import ProductsContainer from './ProductsContainer';

// replace app class with my classes //
class App extends Component {
  render() {
    let productList = productData.products
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Hello this is the shopping cart.
          </p>
          <ProductCard products = {productList} />
        </header>
      </div>
    );
  }
}

export default App;
