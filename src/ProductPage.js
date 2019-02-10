import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard.js';
import productData from './static/data/products.json'

let productList = productData.products

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function ProductPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <ProductCard products = {productList} pass = {classes}/>
      </Grid>
    </div>
  );
}

ProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductPage);
