
# 9. O(n log n)

This commonly appears in efficient sorting algorithms.

Examples:

```text
Merge Sort
Heap Sort
average-case Quick Sort
```

A simplified way to think about it:

```text
n work
×
log n levels
```

Therefore:

```text
O(n log n)
```

---

## Why does Merge Sort have O(n log n)?

Merge Sort repeatedly divides the array:

```text
                 8 elements
                 /       \
              4             4
             / \           / \
            2   2         2   2
           / \ / \       / \ / \
          1  1 1 1      1 1 1 1
```

There are approximately:

```text
log n
```

levels.

At each level, we process approximately:

```text
n
```

elements.

Therefore:

```text
n × log n

= O(n log n)
```
