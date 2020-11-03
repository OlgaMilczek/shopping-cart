import React from 'react'; 
import { Link } from 'react-router-dom';
import { publicPath } from '../config';

var path = require('path');

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-white rounded">
            <Link to="/" className="navbar-brand">
                <img  className='logo' src={path.join(publicPath, 'images/logo-mart.png')} alt='logo' />
            </ Link>
      
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-md-auto">
                    <Link to="/" className="nav-link">
                        <li className="nav-item">
                            <p className="m-auto">Home</p>
                        </li>
                    </Link >
                    <Link to='/shop' className="nav-link">
                        <li className="nav-item">
                            <p className="m-auto">Shop</p>
                        </li>
                    </Link>
                    <Link to='/cart' className="nav-link">
                        <li className='nav-item'>

                            <div>
                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                                <span className='cart-span'>{props.cartItems}</span>
                            </div>
                        </li>

                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
