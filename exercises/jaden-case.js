'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function capitalize(string) {
    if (string.length > 1) {
        return string[0].toUpperCase() + string.substring(1, string.length).toLowerCase();
    }
    return string[0].toUpperCase();
}

function jadenCase(string) {
    let array = string.split(" ");
    let result = capitalize(array[0]);
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        let newWord = capitalize(element);
        result = result + " " + newWord;
    }

    return result;
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
// End of tests */
