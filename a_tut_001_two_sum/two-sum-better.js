const input = [2, 11, 15, 7];
const target = 9;

/*
    Time complexity: O(n) - single loop
    Space complexity: O(n) - extra space used for the hash map
*/


function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if (numMap[needed] !== undefined) {
            return [numMap[needed], i];
        }
        numMap[nums[i]] = i;
    }
}

console.log(twoSum(input, target)); // Output: [0, 3]


/*
This returns indices [0, 3], meaning:

Product at index 0: $12
Product at index 3: $18
Total: $30
This pattern is useful in shopping carts, expense matching, payment reconciliation, and finding two transactions that balance a target amount.

*/
const prices = [12, 25, 7, 18];
const budget = 30;

console.log(twoSum(prices, budget)); // [0, 3]

