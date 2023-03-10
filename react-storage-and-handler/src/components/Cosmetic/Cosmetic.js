import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import "./Cosmetic.css"

const Cosmetic = (props) => {
    const {name, price,id} = props.cosmetic;
    const addToCart = (id)=>{
        addToDb(id);  
    }
    const removeFromCart = id =>{
        removeFromDb(id);
    }
    // const addToCartWithParams= ()=> addToCart(id);
    return (
        <div className = "product">
            <h2>Buy This: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>id: {id}</small></p>
            {/* <button onClick={addToCartWithParams}>Add To Cart</button> */}
            <button className="button" onClick={() =>addToCart(id)}>Add To Cart</button>
            {/* <button onClick={()=>addToCart(name)}>Purchase</button> */}
            <button className="button" onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;