import React, { Component } from "react";
import ProductCard from "./ProductCard.js";
import { Grid } from "semantic-ui-react";
import "./Catalogue.css";

class Catalogue extends Component {
  render() {
    const { productList } = this.props;
    return (
      <Grid className='catalog' columns={5}>
        {productList.map(product => (
          <Grid.Column>
            <ProductCard item ={product} key={product.id} />
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default Catalogue;
