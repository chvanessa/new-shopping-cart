import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import ProductData from './static/data/products.json'
//import Product from './Product.js';

//const pimages =  require('../../static/products/' + item.sku + "_1.jpg")
// replace app class with my classes //
class ProductCard extends Component {
  render() {
    return (
      <div>
      {this.props.products.map(item => (
        <div>
        <div className="pcard-container">
          <img
          style={{ flex: 1, alignSelf:'stretch', width: undefined, height: undefined}}
          src={require('./static/products/' + item.sku + '_1.jpg')} />
          Name: {item.title} <br/>  <br/>
          Price: ${item.price} <br/>
          <button className="addToCartButton"> Add to Cart</button>
          </div>
          <br/>
          </div>
        ))}
        </div>
      )
  }
}

export default ProductCard;
