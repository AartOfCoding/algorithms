
# 10. O(n²) — Quadratic Time

This usually happens when you have a loop inside another loop.

Example:

```ts
function printPairs(numbers: number[]) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            console.log(numbers[i], numbers[j]);
        }
    }
}
// Two-Sum simple approach
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
```

If:

```text
n = 5
```

approximately:

```text
5 × 5 = 25
```

operations.

If:

```text
n = 100
```

then:

```text
100 × 100 = 10,000
```

operations.

If:

```text
n = 10,000
```

then:

```text
100,000,000
```

operations.

So:

```text
O(n²)
```
