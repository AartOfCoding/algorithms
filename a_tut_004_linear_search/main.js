// Linear Search Algorithm Implementation in JavaScript
const test = require('node:test');
const assert = require('node:assert').strict;

const numbers = [4, 8, 15, 16, 23, 42];
const usernames = ["anna_dev", "code_ninja", "js_master", "array_ace", "search_pro"];

function linearSearch(values, target) {
    
    for(let i = 0; i < values.length; i++) {
        if(values[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    
    // If not found it returns -1
    return -1;
}


test('it should successfully return searched item index for linearSearch', () => {
    const index = linearSearch(numbers, 15);
    assert.strictEqual(index, 2, 'it should return 2');
    assert.strictEqual(numbers[index], 15, 'it should return the correct value');
});

test('it should return 0 when the target is the first item', () => {
    const index = linearSearch(numbers, 4);
    assert.strictEqual(index, 0, 'it should return 0');
    assert.strictEqual(numbers[index], 4, 'it should return the correct value');
});

test('it should return the last index when the target is the last item', () => {
    const index = linearSearch(numbers, 42);
    assert.strictEqual(index, 5, 'it should return 5');
    assert.strictEqual(numbers[index], 42, 'it should return the correct value');
});

test('it should return -1 when the target is not found', () => {
    const index = linearSearch(numbers, 99);
    assert.strictEqual(index, -1, 'it should return -1');
});

test('it should work with string values in an array', () => {
    const index = linearSearch(usernames, 'js_master');
    assert.strictEqual(index, 2, 'it should return 2');
    assert.strictEqual(usernames[index], 'js_master', 'it should return the correct value');
});

test('it should return -1 for an empty array', () => {
    const index = linearSearch([], 'anything');
    assert.strictEqual(index, -1, 'it should return -1');
});

