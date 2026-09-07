## O(n!): Factorial Time

**O(n!)** grows extremely quickly. It often happens when an algorithm tries every possible ordering of the input.

```javascript
function permutations(items) {
  if (items.length === 1) {
    return [items];
  }

  return items.flatMap((item, index) => {
    const remaining = items.filter((_, i) => i !== index);

    return permutations(remaining).map(order => [item, ...order]);
  });
}

console.log(permutations(["A", "B", "C"]));
// ABC, ACB, BAC, BCA, CAB, CBA 
```

For 3 items, there are:

$$
3! = 3 \times 2 \times 1 = 6
$$

possible orderings.

For `n` items, the algorithm may try `n!` orderings. This becomes very slow even with a small increase in input size.

For `n` items, the algorithm can produce `n!` orderings:

| Items | Calculation | Orderings |
|---:|---:|---:|
| 3 | `3 × 2 × 1` | 6 |
| 4 | `4 × 3 × 2 × 1` | 24 |
| 5 | `5 × 4 × 3 × 2 × 1` | 120 |
| 6 | `6 × 5 × 4 × 3 × 2 × 1` | 720 |
| 7 | `7!` | 5,040 |
| 8 | `8!` | 40,320 |
| 9 | `9!` | 362,880 |
| 10 | `10!` | 3,628,800 |

Each time one item is added, the number of possible orderings is multiplied by the new input size. For example:

```text
9!  = 362,880
10! = 362,880 × 10
```

So just adding one item, from 9 to 10, creates ten times more possible orderings.