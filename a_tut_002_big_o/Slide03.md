
# 3. What does `n` mean?

You'll see this everywhere:

```text
O(n)
O(log n)
O(n²)
O(2ⁿ)
```

Here:

> **n = size of the input**

For an array:

```ts
const numbers = [10, 20, 30, 40, 50];
```

`n = 5`

For a string:

```text
"HELLO"
```

`n = 5`

For 1 million database records:

```text
n = 1,000,000
```

So when we say:

```text
O(n)
```

we mean:

> As the input grows, the work grows roughly linearly with it.
