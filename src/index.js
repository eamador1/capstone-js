import './styles.css';
import mylogo from ""./images/chicken_food_logo.png";
import getItems from './modules/getItems.js';

document.querySelector('#logo').src = mylogo;

window.addEventListener('load', () => {
  getItems();
});
