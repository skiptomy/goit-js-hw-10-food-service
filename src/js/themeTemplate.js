import items from '../menu.json';
import templateMenuItems from '../templates/menu-items.hbs';

const menuItems = document.getElementById('menu')

const addMenuItems = items => {
    const markup = items.map(item => templateMenuItems(item)).join(' ');
    menuItems.insertAdjacentHTML('beforeend', markup);
}

addMenuItems(items);
