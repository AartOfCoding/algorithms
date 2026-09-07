
# A very important interview question

### "What is the complexity of this?"

```ts
function example(numbers: number[]) {
    for (const number of numbers) {
        console.log(number);
    }

    for (const number of numbers) {
        console.log(number);
    }
}
```

Answer:

```text
O(n + n)
= O(2n)
= O(n)
```

Then:

```ts
function example(numbers: number[]) {
    for (const a of numbers) {
        for (const b of numbers) {
            console.log(a, b);
        }
    }
}
```

Answer:

```text
O(n × n)
= O(n²)
```

---

# Another important question

### What if the two loops use different sizes?

Suppose:

```ts
function example(
    users: User[],
    orders: Order[]
) {
    for (const user of users) {
        // ...
    }

    for (const order of orders) {
        // ...
    }
}
```

Let:

```text
users = n
orders = m
```

Then:

```text
O(n + m)
```

Not `O(n)`.

This is an important step toward more advanced algorithm analysis.

---
