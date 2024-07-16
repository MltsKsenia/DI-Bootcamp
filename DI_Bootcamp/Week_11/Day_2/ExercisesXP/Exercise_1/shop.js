const products = require('./products');

function getProductDetails(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        console.log(`Product: ${product.name}`);
        console.log(`Price: ${product.price}`);
        console.log(`Category: ${product.category}`);
    } else {
        console.log(`Product ${productName} not found.`);
    }
}

getProductDetails('Laptop');
getProductDetails('Phone');
getProductDetails('Shirt');
getProductDetails('Shoes');
getProductDetails('Watch');

// node shop.js shows us

// Product: Laptop
// Price: 1000
// Category: Electronics
// Product: Phone
// Price: 500
// Category: Electronics
// Product: Shirt
// Price: 50
// Category: Clothing
// Product: Shoes
// Price: 100
// Category: Clothing
// Product Watch not found.
