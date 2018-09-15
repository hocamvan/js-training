'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
function multiply(a, b) {
    if (a >= 0) {
        return multiplyNumber1Positive(a, b);
    } else {
        if (b >= 0) {
            return multiplyNumber1Positive(b, a);
        } else {
            return multiplyNumberNegatifs(a, b);

        }
    }
}

function multiplyNumberNegatifs(a, b) {
    if (a === -1) {
        return 0-b;
    }
    if (a === 0) {
        return 0;
    }
    return multiplyNumberNegatifs(a + 1, b) - b;

}

function multiplyNumber1Positive(a, b) {
    if (a === 1) {
        return b;
    }
    if (a === 0) {
        return 0;
    }
    return multiplyNumber1Positive(a - 1, b) + b;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
