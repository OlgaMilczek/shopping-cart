import React from 'react'; 
import { Link } from 'react-router-dom';

function ItemCard(props) {

    const onClick = (e) => {
        e.preventDefault();
        props.addToCart(props.item);
    };

    return (
        <div className= 'col'>
            <div className = 'card m-3 shadow bg-white rounded' >
                <img src={props.item.url} alt={props.item.name} className='card-img-top'/>
                <div className='card-body'> 
                    <Link to={`/shop/${props.item.id}`}>
                        <h4 className ='card-title'>{props.item.name}</h4>
                    </Link>
                    <p className ='card-text'>Price: {props.item.price}$</p>
                    <button onClick={onClick} className ='btn btn-primary'>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;