import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ContainerGrid = styled.div`
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

const ProductsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;

class ProductGrid extends React.Component {

    state = {
        sort: 'CRESCENTE',
    }

    getFilteredAndOrderedList = () => {
        return this.props.products
          .filter((product) => this.props.filterValues.maxFilter ? product.value < this.props.filterValues.maxFilter : true)
          .filter((product) => this.props.filterValues.minFilter ? product.value > this.props.filterValues.minFilter : true)
          .filter((product) => this.props.filterValues.nameFilter ? product.name.includes(this.props.filterValues.nameFilter) : true)
          .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
      }



    render() {

        const filteredAndOrderedList = this.getFilteredAndOrderedList()

        return (
            <div>
                <ProductsHeader>
                    <p> Quantidade de produtos: {filteredAndOrderedList.length} </p>
                    <label>
                        Ordenação:
                        <select value = {this.state.sort}>
                            <option value = {'CRESCENTE'}>Crescente</option>
                            <option value = {'DECRESCENTE'}>Decrescente</option>
                        </select>
                    </label>
                </ProductsHeader>
                <ContainerGrid>
                    {filteredAndOrderedList.map((item) => {
                        return (
                            <Product
                                product={item}
                                onAddProductToCart={this.props.onAddProductToCart}
                            />
                        );
                    })}
                </ContainerGrid>
            </div>
        )
    }
}

export default ProductGrid