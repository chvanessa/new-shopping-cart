import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard.js'; //do i need this huh

// replace app class with my classes //
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Hello this is the shopping cart.
          </p>
          <ProductCard />
        </header>

      </div>
    );
  }
}

export default App;
