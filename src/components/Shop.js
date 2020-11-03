import React, {useState} from 'react'; 
import ItemCard from './ItemCard';

import shopItems from './ShopItems';

function Shop(props) {
    const [shopContent, setShopContent] = useState(shopItems);

    const readyCards = shopContent.map(item => {
        return (
            <ItemCard item={item} key={item.id} addToCart = {props.addToCart}/>
        );
    });

    return (
        <div className='container'>
            <div className='row row-cols-2 row-cols-md-4'>
                {readyCards}
            </div>
        </div>
    );
}

export default Shop;
