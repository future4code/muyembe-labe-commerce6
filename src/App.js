import React from 'react';
import './App.css';
import Product from './components/Product';
import ProductGrid from './components/ProductGrid'
import ProductCar from './components/ProductCar'
import styled from 'styled-components';



class App extends React.Component {
 

  render() {

    return (
      <div>
        <ProductGrid/>
      </div>
    );
  }
}

export default App;
