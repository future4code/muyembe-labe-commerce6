import React, { Component } from 'react';
import styled from 'styled-components';
import Product from './Product';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';



const productList = [
    {
        id: 1,
        name: 'Item 1',
        value: 199,
        img: img1,
    },
    {
        id: 2,
        name: 'Item 2',
        value: 55.90,
        img: img2,
    },
    {
        id: 3,
        name: 'Item 3',
        value: 99,
        img: img3,
    },
    {
        id: 4,
        name: 'Item 3',
        value: 80,
        img: img4,
    },
    {
        id: 5,
        name: 'Item 5',
        value: 40.50,
        img: img5,
    },
    {
        id: 6,
        name: 'Item 6',
        value: 499.99,
        img: img6,
    },
    {
        id: 7,
        name: 'Item 7',
        value: 501,
        img: img7,
    },
    {
        id: 8,
        name: 'Item 8',
        value: 210,
        img: img8,
    },
]

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;    
`

class ProductGrid extends React.Component {

    state = {
        products: productList
    }

    render() {

        const productList = this.state.products.map((item) => {

            return (
                <Product
                    valueProduct={item.value}
                    imgProduct={item.img}
                    nameProduct={item.name}
                />
            );
        });

        return (
            <Container> {productList} </Container>
        )
    }
}

export default ProductGrid