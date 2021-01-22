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

class Product extends React.Component {

    render() {

        return (
            <ItemDiv>
                <Img src={this.props.imgProduct} alt={'Imagem do produto'} />
                <p>{this.props.nameProduct}</p>
                <p>R$ {this.props.valueProduct}</p>
                
            </ItemDiv>
        )
    }
}

export default Product


