import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ProductData from './static/data/products.json'


// replace app class with my classes //
class ProductCard extends Component {
  render() {
    return (
      <div>
      {ProductData.map((itemdetail, index) => {
        return (<div className="pcard-container">
        Name: {itemdetail.title}
        Price: {itemdetail.id} </div>)
      })}
      <div className="pcard-container">
          <p>
          Hello this is a product card!
          </p>
      <p>
        Name:<br/>Price:
        </p>
        <button className="addButton">Add</button>
      </div>
        </div>
    );
  }
}

export default ProductCard;
