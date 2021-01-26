import React from 'react';
import styled from 'styled-components';
import ProductCartItem from './ProductCartItem'



const RemoveItemButton = styled.span`
    font-weight: bold;
    padding: 0 20px;
    
    :hover {
      color: red;
    }
`



class ProductCart extends React.Component {

      render() {

     
        return (
            <div>
                <h2> Carrinho </h2>
                {this.props.cartContent.map((item)=>{
                    return(
                        <ProductCartItem
                            cartItem = {item}
                            cartItemName = {item.product}
                            onRemoveProductFromCart={this.props.removeProductFromCart}                        
                        
                        />
                    )

                })}
            </div>
        )
    }
}

export default ProductCart


