import Cart from './cart.js'; // Import the Cart class from the cart.js module

const cart = new Cart();

function displayProduct(product) {
    const list = document.getElementById('product-list');
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        <div class="photo">
            <a class="product-add2cart">
                <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <div class="details">
            <div class="details-top">
                <strong class="bigger">${product.ref}</strong>
                <strong class="bigger">${product.price} €</strong>
            </div>
            <div class="details-description">
                <p>${product.description}</p>
            </div>
        </div>
    `;
    productElement.querySelector('.product-add2cart').addEventListener('click', () => {
        cart.addToCart(product);
        displayCart();
    });
    list.appendChild(productElement);
}

function buildProductsList(Products) {
    document.getElementById('product-list').innerHTML = '';
    Products.forEach(product => {
        displayProduct(product);
    });
}

function displayCart() {
    const cartTable = document.getElementById('cart-content');
    const cartContents = cart.contenu.map(item => `
        <tr>
            <td>${item.product.ref}</td>
            <td>${item.qty}</td>
            <td>${item.product.price * item.qty} €</td>
        </tr>
    `).reduce((acc, row) => acc + row, '');

    cartTable.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${cartContents}
            </tbody>
        </table>
    `;

    const totalPrice = cart.genericCalc((acc, item) => acc + item.product.price * item.qty);
    document.getElementById('cart-total').innerText = `${totalPrice} €`;

    const totalProducts = cart.genericCalc((acc, item) => acc + item.qty);
    document.getElementById('total-products').innerText = totalProducts;
}

export default buildProductsList;