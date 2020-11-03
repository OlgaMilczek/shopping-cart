import React from 'react'; 
import shopItems from './ShopItems';

function ItemDetails({ match }, addToCart) {
    const shownItem = shopItems.filter(item => {
        return (item.id === Number(match.params.id));
    })[0];

    return (
        <div className="card mt-5" style={{ maxWidth: '960px', margin: 'auto'}} >
            <div className="row">
                <div className="col-md-4">
                    <img src={shownItem.url} alt={shownItem.name} className='card-img item-image-lg'/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{shownItem.name}</h5>
                        <p className="card-text">About: {shownItem.descriptor}</p>
                        <p className ='card-text'>Price: {shownItem.price}$</p>
                        <button onClick={() => addToCart(shownItem)} className ='btn btn-primary'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;
