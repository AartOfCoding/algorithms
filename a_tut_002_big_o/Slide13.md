
# 13. O(n!) — Factorial Time

This is even worse.

Factorial growth appears in problems involving **all possible permutations**.

Suppose you have:

```text
A
B
C
```

Possible arrangements:

```text
ABC
ACB
BAC
BCA
CAB
CBA
```

That's:

```text
3! = 6
```

For 5 elements:

```text
5! = 120
```

For 10:

```text
10! = 3,628,800
```

For 15:

```text
15! = 1,307,674,368,000
```

This grows ridiculously fast.

Example:

```text
Generate every possible ordering
```

can lead to:

```text
O(n!)
```