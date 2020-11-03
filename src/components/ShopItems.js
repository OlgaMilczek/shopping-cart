import {publicPath} from '../config';
var path = require('path');

const urlGen = (filename) => {
    return path.join(publicPath, 'images', filename);
};

const shopItems = [
    {
        url: urlGen('abra.png'),
        id: 1,
        name: 'Abra',
        price: 5,
        quantity: 0,
        descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porta nisi. Praesent luctus turpis sit amet eros ullamcorper commodo. Etiam vestibulum tempus felis, vel convallis arcu ullamcorper eget. Nulla urna nulla, mattis eu massa accumsan, aliquet fringilla purus. Curabitur nec varius metus, ac finibus sapien.',
    }, 
    {
        url: urlGen('bulbasaur.png'),
        id: 2,
        name: 'Bulbasaur',
        price: 7,
        quantity: 0,
        descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porta nisi. Praesent luctus turpis sit amet eros ullamcorper commodo. Etiam vestibulum tempus felis, vel convallis arcu ullamcorper eget. Nulla urna nulla, mattis eu massa accumsan, aliquet fringilla purus. Curabitur nec varius metus, ac finibus sapien.',
    },
    {
        url: urlGen('charmander.png'),
        id: 3,
        name: 'Charmander',
        price: 12,
        quantity: 0,
        descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porta nisi. Praesent luctus turpis sit amet eros ullamcorper commodo. Etiam vestibulum tempus felis, vel convallis arcu ullamcorper eget. Nulla urna nulla, mattis eu massa accumsan, aliquet fringilla purus. Curabitur nec varius metus, ac finibus sapien.',
    },
    {
        url: urlGen('clefairy.png'),
        id: 4,
        name: 'Clefairy',
        price: 3,
        quantity: 0,
        descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porta nisi. Praesent luctus turpis sit amet eros ullamcorper commodo. Etiam vestibulum tempus felis, vel convallis arcu ullamcorper eget. Nulla urna nulla, mattis eu massa accumsan, aliquet fringilla purus. Curabitur nec varius metus, ac finibus sapien.',
    },
    {
        url: urlGen('jigglypuff.png'),
        id: 5,
        name: 'Jigglypuff',
        price: 12,
        quantity: 0,
        descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porta nisi. Praesent luctus turpis sit amet eros ullamcorper commodo. Etiam vestibulum tempus felis, vel convallis arcu ullamcorper eget. Nulla urna nulla, mattis eu massa accumsan, aliquet fringilla purus. Curabitur nec varius metus, ac finibus sapien.',
    },
    {
        url: urlGen('meowth.png'),
        id: 6,
        name: 'Meowth',
        price: 7,
        quantity: 0,
        descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porta nisi. Praesent luctus turpis sit amet eros ullamcorper commodo. Etiam vestibulum tempus felis, vel convallis arcu ullamcorper eget. Nulla urna nulla, mattis eu massa accumsan, aliquet fringilla purus. Curabitur nec varius metus, ac finibus sapien.',
    },
];

export default shopItems;
