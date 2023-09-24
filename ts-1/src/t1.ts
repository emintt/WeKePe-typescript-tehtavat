/* Write a TypeScript program that calculates the total cost of a shopping cart.
 The cart contains items with their prices. Use the number primitive type 
 for prices and quantities. Start by creating the interface first. */

// TODO: Write interface Item
// TODO: Define the properties 'name', 'price', and 'quantity' within the interface

interface Item {
    name: string;
    price: number;
    quantity: number;
}

// Create an empty array named 'cart' to store the items
const cart: Item[] = [];


// TODO: Implement a loop to prompt the user for item details
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
  // TODO: Prompt user for item name, price, and quantity
  let itemName = prompt(`Enter item's name`);
  
  // Break the loop if an empty item name is entered
  if (itemName === "") {
    break;
  }
  
  const itemPrice = prompt(`Enter item's price`);
  const itemQuantity = prompt(`Enter item's quantity`);

  if (itemName === null) {
    itemName = '';
  }
  if ((itemPrice) && (itemQuantity)) {
    if (!isNaN(+itemPrice)) {
       // Create an item object and add it to the 'cart' array
      const newItem: Item = { name: itemName, price: +itemPrice, quantity: +itemQuantity };
      cart.push(newItem);
      console.log(newItem);
    }
  }
  
}

// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);