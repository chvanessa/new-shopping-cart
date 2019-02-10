import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// replace app class with my classes //
class ProductCard extends Component {
  render() {
    return (
      <div>
      {this.props.products.map(item => (
        <div>
        <Grid item xs={6}>
          <Paper className={this.props.pass.paper}>
            <div className="pcard-container">
              <img
                style={{alignSelf: 'center', flex:1, height: 300, width: 200}}
                src={require('./static/products/' + item.sku + '_1.jpg')}
                resizeMode="contain" />
                    Name: {item.title} <br/>  <br/>
                    Price: ${item.price} <br/>
                    <button className="addToCartButton"> Add to Cart</button>
            </div>
          </Paper>
        </Grid>
            <br/>
        </div>
        ))}
      </div>
      )
  }
}

export default ProductCard;
