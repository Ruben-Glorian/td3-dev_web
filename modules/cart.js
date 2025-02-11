class Cart {
    constructor() {
        this.contenu = [];
    }

    addToCart(product) {
        const existingProduct = this.contenu.find(item => item.product.ref === product.ref);
        if (existingProduct) {
            existingProduct.qty += 1;
        } else {
            this.contenu.push({ product, qty: 1 });
        }
    }

    genericCalc(callback) {
        return this.contenu.reduce(callback, 0);
    }
}

export default Cart;