import React from 'react';
import styled from 'styled-components';


const Img = styled.img`
    width: 200px;
    height: auto;
`;

const AddToCart = styled.button`
    background-color: blue;
    color: yellow;
    padding: 10px;
    margin-bottom: 10px;
`;

class Product extends React.Component {

    render() {

        return (
            <div>
                <Img src={this.props.imgProduct} alt={'Imagem do produto'} />
                <p>{this.props.nameProduct}</p>
                <p>R$ {this.props.valueProduct}</p>
                <AddToCart>Adicionar ao Carrinho</AddToCart>
            </div>
        )
    }
}

export default Product


