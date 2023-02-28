import React from 'react';
import "./Cosmetic.css"

const Cosmetic = (props) => {
    const {name, price,id} = props.cosmetic;
    const addToCart = (id)=>{
        console.log("item added", id);
    }
    const addToCartWithParams= ()=> addToCart(id);
    return (
        <div className = "product">
            <h2>Buy This: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>id: {id}</small></p>
            <button onClick={addToCartWithParams}>Add To Cart</button>
        </div>
    );
};

export default Cosmetic;