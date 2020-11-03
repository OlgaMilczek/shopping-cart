import React, {useState} from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';
import Footer from './components/Footer';
import {publicPath} from './config';

function App() {
    const [cart, setCart] = useState({
        items: [],
        numberOfItems:0,
        totalPrice: 0,                             
    });
    
    const addToCart = (item) => {
        let newCartItems = []; 
        let itemInCart = false;
        for (let i=0; i< cart.items.length; i++) {
            let currentItem = cart.items[i];
            if (currentItem.id === item.id) {
                itemInCart = true;
                newCartItems = cart.items.map(mappedItem => {
                    if (currentItem.id === mappedItem.id) {
                        return {
                            ...mappedItem,
                            quantity: mappedItem.quantity + 1,
                        };
                    }
                    return mappedItem;
                });   
            }
        }
        if (!itemInCart) {
            newCartItems = cart.items.concat({
                ...item,
                quantity: 1,
            });
        }
        setCart ({
            items: newCartItems, 
            numberOfItems: cart.numberOfItems + 1,
            totalPrice: cart.totalPrice + item.price,
        });
    };

    const removeFromCart = (item) => {
        let newCartItems = cart.items.filter(currItem => {
            return (currItem.id !== item.id);
        }); 
        setCart ({
            items: newCartItems, 
            numberOfItems: cart.numberOfItems - item.quantity,
            totalPrice: cart.totalPrice - (item.price*item.quantity),
        });
    };

    const decreesFromCart = (item) => {
        if (item.quantity === 1) {
            removeFromCart(item);
            return;
        }
        let newCartItems = []; 
        for (let i=0; i< cart.items.length; i++) {
            let currentItem = cart.items[i];
            if (currentItem.id === item.id) {
                newCartItems = cart.items.map(mappedItem => {
                    if (currentItem.id === mappedItem.id) {
                        return {
                            ...mappedItem,
                            quantity: mappedItem.quantity - 1,
                        };
                    }
                    return mappedItem;
                });   
            }
        }
        setCart ({
            items: newCartItems, 
            numberOfItems: cart.numberOfItems - 1,
            totalPrice: cart.totalPrice - item.price,
        });
    };


    return (
        <div className='main-container'>
            <BrowserRouter basename={publicPath}>
                <Nav cartItems = {cart.numberOfItems}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cart"> 
                        <Cart 
                            cart={cart}
                            addToCart = {addToCart}
                            removeFromCart = {removeFromCart}
                            decreesFromCart ={decreesFromCart}
                        />
                    </Route>
                    <Route exact path="/shop">
                        <Shop 
                            addToCart = {addToCart}
                        />
                    </Route>
                    <Route path='/shop/:id' component={(m) => ItemDetails(m, addToCart)} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
