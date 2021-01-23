import React from 'react';
import styled from 'styled-components';
import Product from './Product';


class ProductFilter extends React.Component {

 state={ 
     valorMinimo: "",
     valorMaximo: "",

 }

    render() {

        return(
            <div> 
                <h1>Filtros</h1>
                <p> Valor Mínimo</p>
                <input type ="number" onChange = {this.props.onChangeFilterMin} value = {this.props.filterValues.minValue}/>
                <p>Valor Máximo</p>
                <input type ="number" onChange = {this.props.onChangeFilterMax}/>
                <p> Busca </p>
                <input type= "text" />
            </div>
        )

    }

}

export default ProductFilter