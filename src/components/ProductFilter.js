import React from 'react';
import styled from 'styled-components';
import Product from './Product';



const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`

class ProductFilter extends React.Component {

    render() {

        return (
            <FiltersContainer>
                <h2>Filtros</h2>
                <label>
                    Valor Mínimo
                <input type="number" onChange={this.props.onChangeFilterMin} value={this.props.filterValues.minFilter} min="0" />
                </label>
                <label>
                    Valor Máximo
                <input type="number" onChange={this.props.onChangeFilterMax} value={this.props.filterValues.maxFilter} min="0" />
                </label>
                <label>
                    Busca
                <input type="text" onChange = {this.props.onChangeNameFilter} value={this.props.filterValues.nameFilter} />
                </label>
            </FiltersContainer>
        )

    }

}

export default ProductFilter