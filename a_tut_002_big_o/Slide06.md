
# 6. O(1) — Constant Time

## What is it?

`O(1)` means:

> The amount of work does not depend on the size of the input.

Example:

```ts
const numbers = [10, 20, 30, 40, 50];

console.log(numbers[2]);
```

We're directly accessing index `2`.

Whether the array has:

```text
10 elements
1,000 elements
1,000,000 elements
```

the operation is essentially the same kind of lookup.

So:

```text
O(1)
```

---

## Another example

```ts
function getFirstElement(arr: number[]) {
    return arr[0];
}
```

The array could contain 10 or 10 million elements.

We're still asking:

> "Give me element 0."

Therefore:

```text
Time Complexity = O(1)
```

---

## Common question

### "Does O(1) mean exactly one operation?"

No.

This is an important distinction.

It means **constant growth**, not necessarily literally one machine instruction.

For example:

```ts
function example() {
    const a = 10;
    const b = 20;
    const c = a + b;
    return c;
}
```

Several operations happen, but the number of operations doesn't grow with `n`.

So it is still:

```text
O(1)
```

---
