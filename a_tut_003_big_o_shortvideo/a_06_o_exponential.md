## O(2ⁿ): Exponential Time

**O(2ⁿ)** grows very quickly. Each time the input increases by one, the work can roughly double.

A simple example is generating all possible yes/no combinations:

```javascript
function generateChoices(items, index = 0, choices = []) {
  if (index === items.length) {
    console.log(choices);
    return;
  }

  generateChoices(items, index + 1, [...choices, "No"]);
  generateChoices(items, index + 1, [...choices, "Yes"]);
}

generateChoices(["A", "B", "C"]);
```

For each item, the function makes two choices: `"No"` or `"Yes"`.

- 1 item → 2 combinations
- 2 items → 4 combinations
- 3 items → 8 combinations
- `n` items → $2^n$ combinations

That is why this algorithm has **O(2ⁿ)** time complexity.