const fs = require('fs');
const faker = require('faker');  // Install with `npm install faker`

// Function to generate a single product
const generateProduct = (index) => ({
    name: `Product ${index + 1}`,
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    category: faker.commerce.department(),
    stock: Math.floor(Math.random() * 100) + 1,
    imageUrl: faker.image.imageUrl()
});

// Generate an array of 100 unique products
const productsArray = Array.from({ length: 100 }, (_, index) => generateProduct(index));

// Convert the products array to JSON format
const productsJson = JSON.stringify({ products: productsArray }, null, 2);

// Write the JSON data to a file
fs.writeFile('products.json', productsJson, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Data successfully written to products.json');
    }
});
