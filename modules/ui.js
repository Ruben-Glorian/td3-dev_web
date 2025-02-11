import Products from "./products.js";

function displayProduct(product) {
    const list = document.getElementById('product-list');
    list.innerHTML += `<div className="product">
            <div className="photo">
                <img src="${product.image}" alt="${product.ref}">
                <a className="product-add2cart">
                    <span className="mdi mdi-cart"></span>
                </a>
            </div>
            <div className="details">
                <div className="details-top">
                    <strong className="bigger">${product.ref}</strong>
                    <strong className="bigger">${product.price} €</strong>
                </div>
                <div className="details-description">
                    <p>${product.description}</p>
                </div>
            </div>
        </div>` ;
}

function buildProductsList(Products) {
    for (let product of Products) {
        displayProduct(product) ;
    }
}

export default buildProductsList() ;