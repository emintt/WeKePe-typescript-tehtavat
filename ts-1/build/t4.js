"use strict";
/* Define a type alias for a product that can be either an electronic device
 with brand and model or a book with title and author. Create instances of this
 type alias for different products.

1. Define a type alias named Product that can represent either an ElectronicDevice
 or a Book.
2. Implement instances of the Product type for a sample electronic device and a
 book, prompting the user for details.
3. Display the details of each product, including the properties specific to the
chosen type. */
// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = prompt(`Enter your device's brand`);
    const model = prompt(`Enter your device's model`);
    // TODO: return object containing brand and model
    if (brand === null || brand === undefined) {
        return 'Brand id undefined or null';
    }
    if (model === null || model === undefined) {
        return 'Model id undefined or null';
    }
    const newElectronicDevice = {
        brand: brand,
        model: model,
        type: 'electronic',
    };
    return newElectronicDevice;
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    const title = prompt(`Enter book's title`);
    const author = prompt(`Enter book's author`);
    // TODO: return object containing title and author
    if (title === null || title === undefined) {
        return 'Brand id undefined or null';
    }
    if (author === null || author === undefined) {
        return 'Model id undefined or null';
    }
    const newBook = {
        title: title,
        author: author,
        type: 'book',
    };
    return newBook;
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic' && 'brand' in product) {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else if ('title' in product) {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
if (typeof electronicProduct !== 'string') {
    console.log('Electronic Device Details:');
    displayProductDetails(electronicProduct);
}
console.log();
if (typeof bookProduct !== 'string') {
    console.log('Book Details:');
    displayProductDetails(bookProduct);
}
