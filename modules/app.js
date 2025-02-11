import * as products from './products.js';
import * as ui from './ui.js';

// Function to initialize the app
async function init() {
    try {
        const productList = await products.getProducts();
        ui.buildProductsList(productList);
    } catch (error) {
        console.error('Failed to initialize app:', error);
    }
}

// Export the init function
export default init ;
