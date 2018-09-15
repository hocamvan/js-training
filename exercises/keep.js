'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(params) {
    return params.substring(0,2);
}

function keepLast(params) {
    return params.substring(params.length - 2, params.length);
}

function keepFirstLast(params) {
    return params.substring(2,4);;
}



//* Begin of tests
const assert = require('assert')


assert.strictEqual(keepFirst("ABCDE"), "AB")
assert.strictEqual(keepLast("ABCDE"), "DE")
assert.strictEqual(keepFirstLast("ABCDE"), "CD")
// End of tests */
