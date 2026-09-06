# 1. What is Big O?

Suppose you have an array:

```ts
const numbers = [10, 20, 30, 40, 50];
```

There are 5 elements.

Now imagine the array contains:

```text
10 elements
1,000 elements
1,000,000 elements (1m)
100,000,000 elements (10m)
```

The important question isn't:

> "How many milliseconds does my code take?"

because milliseconds depend on the computer, CPU, programming language, compiler, etc.

Instead, we ask:

> **"How does the amount of work grow when the input grows?"**

That's what Big O helps us understand.

---
