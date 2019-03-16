import React, { Component } from 'react';
import './App.css';
import ProductCard from './ProductCard.js';
import Cart from './Cart.js'
import Catalogue from './Catalogue.js'
// import productData from './static/data/products.json'
// let productList = productData.products

// replace app class with my classes //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
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
    return (
      <div className="App">
          <Catalogue productList = {products} />
          <Cart/>
      </div>
    );
  }
}

export default App;
