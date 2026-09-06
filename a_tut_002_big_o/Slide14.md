
# Big O isn't only about time

There are actually two important forms of complexity.

### Time Complexity

How computation grows.

```text
O(n)
O(log n)
O(n²)
```

### Space Complexity

How additional memory grows.

Example:

```ts
function copyArray(numbers: number[]) {
    const result = [];

    for (const n of numbers) {
        result.push(n);
    }

    return result;
}
```

We're creating another array containing `n` elements.

So:

```text
Space Complexity = O(n)
```

This is very important in real system design.
