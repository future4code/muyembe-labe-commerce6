import React from 'react';
import styled from 'styled-components';


const Img = styled.img`
    width: 200px;
    height: auto;
    align-items: center;
    margin: auto;

`;


const ItemDiv = styled.div`
    display: grid;
    align-items: center;
    text-align: center;
`

const AddToCart = styled.button`
    background-color: blue;
    color: yellow;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

class Product extends React.Component {

    render() {

        return (
            <ItemDiv>
                <Img src={this.props.product.img} alt={'Imagem do produto'} />
                <p>{this.props.product.name}</p>
                <p>R$ {this.props.product.value}</p>
                <AddToCart onClick={() => this.props.onAddProductToCart(this.props.product)}>Adicionar ao carrinho</AddToCart>
                
            </ItemDiv>
        )
    }
}

export default Product


