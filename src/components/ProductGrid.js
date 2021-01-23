import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    text-align: center;    
`

const AddToCart = styled.button`
    background-color: blue;
    color: yellow;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

class ProductGrid extends React.Component {

    render() {

        const productList = this.props.products.map((item) => {


            return (
                <div>
                    <Product
                        valueProduct={item.value}
                        imgProduct={item.img}
                        nameProduct={item.name}
                    />
                    <AddToCart onClick = {() => this.props.addProductToCart(item)}>Adicionar ao Carrinho</AddToCart>
                </div>
                
            );
        });

        return (
            <Container> {productList} </Container>
        )
    }
}

export default ProductGrid