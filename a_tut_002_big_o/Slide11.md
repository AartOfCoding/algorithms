
# 11. A very important trap

Two loops do **not automatically mean O(n²)**.

Consider:

```ts
for (const x of numbers) {
    console.log(x);
}

for (const x of numbers) {
    console.log(x);
}
```

That's:

```text
O(n) + O(n)
= O(2n)
= O(n)
```

These loops happen sequentially.

But:

```ts
for (...) {
    for (...) {
    }
}
```

means:

```text
O(n × n)

= O(n²)
```

This distinction is extremely useful in interviews.
