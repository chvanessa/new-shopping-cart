import React, { Component } from "react";
import ProductCard from "./ProductCard.js";
import "./Catalogue.css";

class Catalogue extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="catContainer">
      <div className="flex-container">
        {productList.map(product => (
            <ProductCard item ={product} key={product.id} addItem = {this.props.addItem}/>))}
      </div>
      </div>
    );
  }
}

export default Catalogue;
