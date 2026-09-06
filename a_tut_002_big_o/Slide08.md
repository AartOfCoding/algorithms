
# 8. O(log n) — Logarithmic Time

This is where many beginners struggle.

The simplest explanation:

> **Instead of checking everything, we repeatedly eliminate a large portion of the search space.**

The classic example is **Binary Search**.

Suppose we have:

```text
1 2 3 4 5 6 7 8
```

We want to find `7`.

Instead of checking:

```text
1
2
3
4
5
6
7
```

we check the middle.

```text
1 2 3 4 | 5 6 7 8
          ↑
```

Then determine which half contains the value.

Every step eliminates approximately half the remaining data.

```text
8
 ↓
4
 ↓
2
 ↓
1
```

That's logarithmic.

So:

```text
O(log n)
```

---

## Binary Search example

```ts
function binarySearch(
    numbers: number[],
    target: number
) {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (numbers[mid] === target) {
            return mid;
        }

        if (numbers[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

---

## Common question

### "Why is binary search O(log n)?"

Because each iteration cuts the remaining search space roughly in half.

For example:

```text
1,024 elements

1024
 ↓
512
 ↓
256
 ↓
128
 ↓
64
 ↓
32
 ↓
16
 ↓
8
 ↓
4
 ↓
2
 ↓
1
```

Only about 10 divisions are required.

Because:

```text
2¹⁰ = 1024
```

Therefore:

```text
log₂(1024) = 10
```

That is the intuition behind `O(log n)`.


For **Binary Search**, the maximum number of iterations is approximately:

$$
\boxed{\lfloor \log_2(n) \rfloor + 1}
$$

where **n = number of elements**.

Examples:

| Elements (`n`) | Max iterations |
| -------------: | -------------: |
|              1 |              1 |
|              2 |              2 |
|              4 |              3 |
|              8 |              4 |
|             16 |              5 |
|             32 |              6 |
|          1,024 |             11 |
|      1,000,000 |             20 |

### Why?

Binary search removes **half of the remaining elements** in every iteration.

For 16 elements:

```text
16
 ↓ half
8
 ↓ half
4
 ↓ half
2
 ↓ half
1
```

So we need about **5 iterations**.

> **“Binary Search में हर iteration में हम data को आधा कर देते हैं। इसलिए अगर हमारे पास `n` elements हैं, तो maximum iterations लगभग `log₂(n)` होती हैं. यही कारण है कि Binary Search की time complexity `O(log n)` है।”**

