import React from 'react'; 
import { Link } from 'react-router-dom';

import {trash, plus, minus} from './ButtonIcons';

function Cart(props) {

    const cartElement = props.cart.items.map(item => {
        return (
            <tr key ={item.id}>
                <th scope="col" ><Link to={`/shop/${item.id}`}>{item.name}</Link></th>
                <th scope="col">
                    <button className ='borderless-button' onClick= {() => props.decreesFromCart(item)}>{minus}</button> 
                    {item.quantity} 
                    <button className ='borderless-button' onClick= {() => props.addToCart(item)}>{plus}</button></th>
                <th scope="col">{item.price}$</th>
                <th scope="col">{item.price * item.quantity}$</th>
                <th scope="col">
                    <button className ='borderless-button' onClick= {() => props.removeFromCart(item)}>
                        {trash}
                    </button>
                </th>
            </tr>
        );
    });
    
    if(props.cart.totalPrice !== 0) {
        return (
            <div className="mt-5" style={{ maxWidth: '960px', margin: 'auto'}} >
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style = { { width: '70%'}}>Name</th>
                            <th scope="col" style = { { width: '15%'}}>Quantity</th>
                            <th scope="col" style = { { width: '5%'}}>Price</th>
                            <th scope="col" style = { { width: '5%'}}>Total</th>
                            <th scope="col" style = { { width: '5%'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartElement}
                        <tr>
                            <th scope="col" ></th>
                            <th scope="col" colSpan="2">Total price: </th>
                            <th scope="col">{props.cart.totalPrice}$</th>
                            <th scope="col"></th>
                        </tr>  
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div className="mt-5" style={{ maxWidth: '960px', margin: 'auto'}}>
                <h2 className="text-center">Your cart is empty</h2>
            </div>
        );
    }
}

export default Cart;
