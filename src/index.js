import './styles.css';
import mylogo from './images/chicken_food_logo';
import getItems from './modules/getItems.js';

document.querySelector('#logo').src = mylogo;

window.addEventListener('load', () => {
  getItems();
});
