const input = [2, 11, 15, 7];
const target = 9;

/*
    Time complexity: O(nSquare) - nested loops
    Space complexity: O(1) - no extra space used
*/

function twoSum(nums, target) {
    // generate twoSum simple approach
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum(input, target)); // Output: [0, 3]
