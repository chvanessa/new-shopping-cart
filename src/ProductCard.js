import React, { Component } from 'react';
// import { Card, Button, Icon } from "semantic-ui-react";
import './ProductCard.css'

class ProductCard extends Component {
  render() {
    const { item } = this.props;
    return (

      <div>
            <img src={require('./static/products/' + item.sku + '_1.jpg')}/>
            <div className="pcard-text">
              {item.title} <br/>
              Price: ${item.price}
            </div>
            <button className="addToCartButton"> Add to Cart</button>
        </div>
      )
  }
}

export default ProductCard;
