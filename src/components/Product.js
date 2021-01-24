import React from 'react';
import styled from 'styled-components';
import { ProductCart } from './ProductCart';
import { ProductCard } from './ProductCard'


const Img = styled.img`
    width: 200px;
    height: auto;
    align-items: center;
    margin: auto;

`;

// const ItemDiv = styled.div`
//     display: grid;
//     align-items: center;
//     text-align: center;
// `

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  `

export class Products extends React.Component {

    getFilteredList = () => {
        return this.props.products
            .filter((product) => this.props.maxFilter ? product.price < this.props.maxFilter : true)
            .filter((product) => this.props.minFilter ? product.price > this.props.minFilter : true)
            .filter((product) => this.props.nameFilter ? product.name.includes(this.props.nameFilter) : true)
    }

    render() {
        const filteredList = this.getFilteredList()

        return <ProductsGrid>
        {filteredList.map((products) => {
          return <ProductCard product={products}/>
        })}
      </ProductsGrid>
        }
    }


export default Products


