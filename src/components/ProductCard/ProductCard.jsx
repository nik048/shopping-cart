import React from 'react';
import AddToCart from '../AddToCart';

function ProductCard(props){
 return (

    <div>
        <h3>{props.title}</h3>
        <AddToCart />
    </div>
 )
}

export default ProductCard;