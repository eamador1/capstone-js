import './styles.css';
import mylogo from './images/chickenFoodLogo.js';
import getItems from './modules/getItems.js';

document.querySelector('#logo').src = mylogo;

window.addEventListener('load', () => {
  getItems();
});
