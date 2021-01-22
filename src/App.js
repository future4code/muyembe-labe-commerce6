import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid'
import ProductCart from './components/ProductCart'
import styled from 'styled-components';

import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import shoppingCart from './img/shopping-cart.png';

// ------------------------   Lista de produtos da nossa loja

const productList = [
  {
    id: 1,
    name: 'Modelo 1',
    value: 199,
    img: img1,
  },
  {
    id: 2,
    name: 'Modelo 2',
    value: 55.90,
    img: img2,
  },
  {
    id: 3,
    name: 'Modelo 3',
    value: 99,
    img: img3,
  },
  {
    id: 4,
    name: 'Modelo 4',
    value: 80,
    img: img4,
  },
  {
    id: 5,
    name: 'Modelo 5',
    value: 40.50,
    img: img5,
  },
  {
    id: 6,
    name: 'Modelo 6',
    value: 499.99,
    img: img6,
  },
  {
    id: 7,
    name: 'Modelo 7',
    value: 501,
    img: img7,
  },
  {
    id: 8,
    name: 'Modelo 8',
    value: 210,
    img: img8,
  },
]

//------- Colunas da loja: as colunas mudam dependendo se o carrinho está visível ou não

const AppColumns = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.cartIsVisible ? '1fr 40px' : '1fr'};
  grid-template-columns: ${(props) => props.cartIsVisible ? '3fr 1fr' : '1fr'};
  padding: 10px;
  gap: 20px;
`

const CartImage = styled.div`
  position: absolute;
  bottom: 0px;
  right:0px;
  
  > img {
    width: 20%;
    height: 20%;
  }
  
`

class App extends React.Component {

  state = {
    products: productList,
    cart: [],
    isCartVisible: false,
  }

  addProductToCart = (product) => {

    const newProduct = {
      product: product,
      quantity: 1
    }

    const newCart = [...this.state.cart, newProduct]

    this.setState({
      cart: newCart,
    })

  }


  removeProductFromCart = (itemId) => {

    const newCart = this.state.cart.filter((item) => {
      return itemId !== item.product.id
    })

    this.setState({
      cart: newCart
    })

  }

  CartColumn = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible,
    })
  }



  render() {



    return (
      <div>
        <AppColumns cartIsVisible={this.state.isCartVisible}>

          <ProductGrid
            products={this.state.products}
            addProductToCart={this.addProductToCart}
          />

          {this.state.isCartVisible && (
            <ProductCart
              cartContent={this.state.cart}
              removeProductFromCart={this.removeProductFromCart}
            />
          )}

          <CartImage onClick={this.CartColumn}>
            <img src={shoppingCart} /> 
          </CartImage>

        </AppColumns>
      </div>
    );
  }
}

export default App;
