import React from 'react';
import styled from 'styled-components';
import Product from './Product';



const RemoveItemButton = styled.span`
    font-weight: bold;
    padding: 0 20px;
    
    :hover {
      color: red;
    }
`

class ProductCart extends React.Component {

    totalValueSum() {
        return this.props.cartContent.reduce((accum, item) => {
            // console.log("ver o que é o segundo parâmetro do reduce", item)
            return accum + item.product.value * item.quantity
        }, 0)
    }


    render() {

        const totalValue = this.totalValueSum()
        const cartItens = this.props.cartContent.map((item) => {
            
                       
            return (
                <div>
                    {item.quantity} x {item.product.name}
                    <RemoveItemButton onClick={() => this.props.removeProductFromCart(item.product.id)}> X </RemoveItemButton>
                </div>
            )
        })

        return (
            <div>
                <h2> Carrinho </h2>
                <p>Total: R$ {totalValue}</p>
                {cartItens}
            </div>
        )
    }
}

export default ProductCart


