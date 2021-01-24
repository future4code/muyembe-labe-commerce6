import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid'
import ProductCart from './components/ProductCart'
import styled from 'styled-components';
import ProductFilter from './components/ProductFilter'

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


const AppColumns = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.cartIsVisible ? '1fr 4fr 1fr' : '1fr 5fr'};
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
    isCartVisible: false,
    filter: {
      minFilter: '',
      maxFilter: '',
      nameFilter: '',
    },
    cart: [],
  }

  onAddProductToCart = (product) => {

    const productInCart = this.state.cart.find(item => item.id === product.id)
    // Nessa primeira linha verificamos se o produto já esta no carrinho. 
    // Se o elemento é encontrado o find retorna o elemento e se não é retorna undefined

    // Se o produto estiver no carrinho: eu aumento 1 na sua quantidade deixando os outros dados inalterados
    if (productInCart) {
      const newproductInCart = this.state.cart.map((itemInCart) => {
        if (itemInCart.id === product.id) {
          return { ...itemInCart, quantity: itemInCart.quantity + 1 }
        }
        return itemInCart

      })

      this.setState({ cart: newproductInCart })

      // Se o produto não estiver no carrinho, crio um novo produto, adiciono ele em um novo carrinho (newCart) e mudo o state para esse newCart
    } else {

      const newProduct = {
        id: product.id,
        name: product.name,
        value: product.value,
        img: product.img,
        quantity: 1
      }

      const newCart = [...this.state.cart, newProduct]

      this.setState({
        cart: newCart,
      })

    }
  }

  onRemoveProductFromCart = (itemId) => {

    //Nossa lógica antiga (seguindo o vídeo de adicionar e remover post)

    // const newCart = this.state.cart.filter((item) => {
    //   return itemId !== item.id
    // })
    // this.setState({
    //   cart: newCart
    // })

    // lógica nova seguindo vídeo do Darvas
    const newProductsInCart = this.state.cart.map((itemInCart) => {
      if (itemInCart.id === itemId) {
        return {
          ...itemInCart,
          quantity: itemInCart.quantity - 1
        }
      }
      return itemInCart
    }).filter((itemInCart) => itemInCart.quantity > 0)

    this.setState({ cart: newProductsInCart })
  }


  CartColumn = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible,
    })
    
  }


  onChangeFilterMin = (event) => {
    this.setState({
      filter: {
        minValue: event.target.value
      }
    })
  }


  onChangeFilterMax = (event) => {
    this.setState({
      filter: {
        maxValue: event.target.value
      }
    })
  }


  onChangeNameFilter = (event) => {
    this.setState({
      nameFilter: event.target.value
    })
  }


  render() {

    return (
      <div>
        <AppColumns cartIsVisible={this.state.isCartVisible}>

          <ProductFilter
            filterValues={this.state.filter}
            onChangeFilterMin={this.onChangeFilterMin}
            onChangeFilterMax={this.onChangeFilterMax}
            onChangeNameFilter={this.onChangeNameFilter}
          />

          <ProductGrid
            products={this.state.products}
            onAddProductToCart={this.onAddProductToCart}
            filterValues={this.state.filter}
          />

          {this.state.isCartVisible && (
            <ProductCart
              cartContent={this.state.cart}
              removeProductFromCart={this.onRemoveProductFromCart}
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
