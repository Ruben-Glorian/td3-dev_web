import Products from './products.js';
import { search } from './products.js';
import buildProductsList from './ui.js';

// Function to initialize the app
function init() {
    buildProductsList(Products);

    const searchField = document.getElementById('search-field');
    searchField.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const keywords = searchField.value;
            const searchResults = search(keywords);
            buildProductsList(searchResults);
        }
    });
}

// Export the init function
export default init ;
