'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(params) {
    return params.substring(2,params.length);
}

function cutLast(params) {
    let end = params.length - 2;
    return params.substring(0, end);
}

function cutFirstLast(params) {
    return cutLast(cutFirst(params));
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst("ABC"), "C")
assert.strictEqual(cutLast("ABC"), "A")
assert.strictEqual(cutFirstLast("ABCDE"), "C")

// End of tests */
