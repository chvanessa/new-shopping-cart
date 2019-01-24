import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ProductData from './static/data/products.json'

// replace app class with my classes //
class ProductsContainer extends Component {
  render() {
    return (
      <div className="pcard-container">
      Product Container!!
      </div>
// const Frameworks = (props) => {
//   return (
//     <React.Fragment>
//       {props.items.ProductData.map(item => (
//         <React.Fragment key={item.id}>
//           <h2>{item.name}</h2>
//           <p>{item.url}</p>
//           <p>{item.description}</p>
//         </React.Fragment>
//       ))}
//     </React.Fragment>
//   )
// }
//
// const App = () => {
//   return (
//     <Frameworks items={preload} />
//   )
// }
      //</div>
      //stuff
      // <div className="pcard-container">
      // {ProductData.map((itemdetail, index) => {
      //   return (
      //     <div>
      //     Name: {itemdetail.title}
      //     <br/>
      //     Price: {itemdetail.id} </div>)
      //   })}
      //end stuff
     //);
  }
}

export default ProductsContainer;
