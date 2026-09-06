
# The most important mental model

When analyzing code, ask these questions in order:

### Question 1

**What is my input size?**

```text
n = ?
```

### Question 2

**How many times does this operation execute?**

```text
1 time
n times
n² times
log n times
```

### Question 3

**Are loops sequential or nested?**

```text
Sequential → ADD

Nested → MULTIPLY
```

### Question 4

**Does recursion branch?**

```text
One recursive call → possibly linear
Multiple branching calls → possibly exponential
```

### Question 5

**What additional memory am I creating?**

This gives your space complexity.

---
