
# 4. What does Big O actually measure?

A common beginner misunderstanding is:

> "Big O tells me exactly how many CPU instructions my code executes."

Not really.

Big O focuses on the **growth rate** of the algorithm.

For example:

```text
5n
10n
100n
```

are all considered:

```text
O(n)
```

because the growth is still linear.

Similarly:

```text
n² + n + 10
```

is:

```text
O(n²)
```

because `n²` dominates as `n` becomes large.
