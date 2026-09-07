## O(log n): Logarithmic Time

**O(log n)** grows slowly because the problem gets smaller, often by half in each step.

Example: binary search.

```javascript
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
let target = 11;

let start = 0;
let end = numbers.length - 1;

while (start <= end) {
  const middle = Math.floor((start + end) / 2);

  if (numbers[middle] === target) {
    console.log("Found!");
    break;
  }

  if (numbers[middle] < target) {
    start = middle + 1;
  } else {
    end = middle - 1;
  }
}
```

Each step removes half of the remaining numbers. That is why binary search has **O(log n)** time complexity.