import React, { Component } from 'react';
import './ProductCard.css'
import { Button } from 'semantic-ui-react'



class ProductCard extends Component {

  render() {
    const { item } = this.props;
    return (
      <div>
            <img className='prodImage' src={require('./static/products/' + item.sku + '_1.jpg')}/>
            <div className="pcard-text">
              {item.title} <br/>
              Price: ${item.price}
            </div>
            {item.availableSizes.map(option => (
              <Button onClick={() => {this.props.addItem(item, option)}}>{option}</Button>
            ))}
        </div>
      )
  }
}

export default ProductCard;
