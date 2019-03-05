import React, { Component } from "react";
import ProductCard from "./ProductCard.js";
import { Card, Grid } from "semantic-ui-react";
import "./Catalogue.css";

class Catalogue extends Component {
  render() {
    const { productList } = this.props;
    return (
      <Grid className='catalogue' columns={5}>
      <Card.Group itemsPerRow={3}>
        {productList.map(product => (
          <Grid.Column>
            <ProductCard prod ={product} key={product.id} />
          </Grid.Column>
        ))}
        </Card.Group>
      </Grid>
    );
  }
}

export default Catalogue;
