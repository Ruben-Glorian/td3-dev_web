class Product {
    ref ;
    price ;
    description ;

    constructor(r, p, d) {
        this.ref = r ;
        this.price = p ;
        this.description = d ;
    }
}

var Products = [] ;
Products.push(new Product("Bicyclette blue",120.00, "Une bicyclette blue fabriquée en France."));
Products.push(new Product("Crayon rouge", 0.25, "Un crayon à papier rouge."));
Products.push(new Product("Barre à mine", 25.00, "Une barre à mine en acier."));

function search(keywords) {
    return Products.filter(product => 
        product.ref.includes(keywords) || product.description.includes(keywords)
    );
}

export { Products as default, search };