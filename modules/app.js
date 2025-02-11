import Products from './products.js';
import { search } from './products.js';
import buildProductsList, {displayCart} from './ui.js';
import cart from './cart.js';

// Function to initialize the app
function init() {
    buildProductsList(Products);

    const searchField = document.getElementById('product-search');
    searchField.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const keywords = searchField.value;
            const searchResults = search(keywords);
            buildProductsList(searchResults);
        }
    });

    const emptyCartLink = document.getElementById('empty-cart');
    emptyCartLink.addEventListener('click', (event) => {
        cart.emptyCart();
        displayCart();
    });
}

// Export the init function
export default init;
