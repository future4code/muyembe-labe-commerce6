import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const FilterContainer = styled.div`
    border: 1px solid black;
    padding: 8px;
 `;

export class ProductFilter extends React.Component {
    render() {
        return <FilterContainer>
            <h3>Filtros</h3>
            <div>
                Valor Mínimo
            </div>
            <input type="number" onChange={this.props.onChangeMinFilter} value={this.props.minFilter} />
            <div>
                Valor Máximo
            </div>
            <input type="number" onChange={this.props.onChangeMaxFilter} value={this.props.maxFilter} />
            <div>
                Buscar por Nome:
            <input type="text" onChange={this.props.onChangeNameFilter} value={this.props.nameFilter} />
            </div>
        </FilterContainer>
    }
}

export default ProductFilter