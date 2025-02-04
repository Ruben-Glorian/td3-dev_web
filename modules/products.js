class Product {
    ref ;
    price ;
    description ;

    constructor(r, p, d) {
        this.ref = r ;
        this.price = p ;
        this.description ;
    }
}

var Products = [] ;
Products.push(Product("Bicyclette blue",120.00, "Une bicyclette blue fabriquée en France."));
Products.push(Product("Crayon rouge", 0.25, "Un crayon à papier rouge."));
Products.push(Product("Barre à mine", 25.00, "Une barre à mine en acier."));
export default Products ;