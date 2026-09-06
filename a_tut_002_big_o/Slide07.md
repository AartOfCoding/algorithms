
# 7. O(n) — Linear Time

## What is it?

`O(n)` means:

> Work grows linearly with the input size.

Example:

```ts
function printNumbers(numbers: number[]) {
    for (const number of numbers) {
        console.log(number);
    }
}
```

If:

```text
n = 5
```

we process approximately 5 elements.

If:

```text
n = 1000
```

we process approximately 1000 elements.

So:

```text
O(n)
```

---

## Linear Search

This is one of the best examples.

```ts
function findNumber(numbers: number[], target: number) {
    for (const number of numbers) {
        if (number === target) {
            return true;
        }
    }

    return false;
}
```

Worst case:

```text
[10, 20, 30, 40, 50]
                     ↑
                  target
```

We may need to inspect every element.

Therefore:

```text
O(n)
```
