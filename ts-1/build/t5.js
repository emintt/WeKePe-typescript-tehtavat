"use strict";
/* Write a function that takes a string or number and returns its length if
 it's a string or the square of the number if it's a number. Use union types
 to handle both cases.

1. Prompt the user to enter a value as either a string or a number.
2. Define a TypeScript function that takes a parameter of type string | number.
3. Use a type guard to check the actual type of the parameter.
4. If the parameter is a string, display its length. If it's a number, display its square. */
// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value) {
    // TODO: Use a type guard to check the actual type of 'value'
    // if type is string, retrurn the length of the string
    // if type is number return the square of the number
    let result = '';
    if (typeof value === 'string') {
        result = value.length;
    }
    else if (typeof value === 'number') {
        result = value ** 2;
    }
    return result;
}
// Prompt the user to enter a value as either a string or a number
const userInputT5 = prompt('Enter a number or some text');
/* TODO: If userInput is numeric, convert it to number else keep it as string */
const parsedValue = userInputT5 ?
    isNaN(+userInputT5) ? userInputT5 : parseFloat(userInputT5) : undefined;
let resultT5 = '';
if (parsedValue === undefined) {
    resultT5 = 'no input was received';
}
else {
    // Call the lengthOrSquare function 
    resultT5 = lengthOrSquare(parsedValue);
}
console.log(typeof resultT5);
console.log(resultT5);
