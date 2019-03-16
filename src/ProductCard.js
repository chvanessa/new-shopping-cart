import React, { Component } from 'react';
import { Card, Button, Icon } from "semantic-ui-react";
import './ProductCard.css'

// class ProductCard extends Component {
//   render() {
//     const { item } = this.props;
//     return (
//       <Card
//       image=
//       header={item.title}
//       description={`$ ${item.price}`}
//       //extra={btn}
//       />
//
//                     // Name: {item.title} <br/>  <br/>
//                     // Price: ${item.price} <br/>
//                     // <button className="addToCartButton"> Add to Cart</button>
//       )
//   }
// }
//
// export default ProductCard;

const btn = (
  <Button icon labelPosition="right">
    Add to cart
    <Icon name="shop" />
  </Button>
);

const Product = props => {
  const {item} = props;
  return (
    <Card
      image={require('./static/products/' + item.sku + '_1.jpg')}
      header={item.title}
      description={`$ ${item.price}`}
      extra={btn}
    />
  );
};

export default Product;
