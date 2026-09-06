
# 23. The key Big O cheat sheet

| Big O        | Name         | Typical Example           |
| ------------ | ------------ | ------------------------- |
| `O(1)`       | Constant     | Array index / Hash lookup |
| `O(log n)`   | Logarithmic  | Binary Search             |
| `O(n)`       | Linear       | Linear Search             |
| `O(n log n)` | Linearithmic | Merge Sort                |
| `O(n²)`      | Quadratic    | Nested loops              |
| `O(2ⁿ)`      | Exponential  | Naive recursive Fibonacci |
| `O(n!)`      | Factorial    | Generate permutations     |

A useful rule to remember:

```text
O(1)
 ↓
O(log n)
 ↓
O(n)
 ↓
O(n log n)
 ↓
O(n²)
 ↓
O(2ⁿ)
 ↓
O(n!)
```

**Generally, prefer the lowest growth rate that solves the problem.**
