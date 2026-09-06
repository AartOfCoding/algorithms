
# 12. O(2ⁿ) — Exponential Time

Now things become dangerous.

`O(2ⁿ)` means the work **doubles as the input grows by one**.

A common beginner example is naive recursive Fibonacci.

```ts
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) +
           fibonacci(n - 2);
}
```

The recursion branches:

```text
                 fib(n)
                /      \
          fib(n-1)    fib(n-2)
           /   \        /   \
        ...    ...    ...   ...
```

The same subproblems are calculated repeatedly.

That's why the number of calls grows exponentially.

Approximately:

```text
n = 10   → ~1,000
n = 20   → ~1,000,000
n = 30   → ~1,000,000,000
```

The exact counts depend on the implementation and recurrence, but the key lesson is:

> **Exponential growth becomes enormous very quickly.**
