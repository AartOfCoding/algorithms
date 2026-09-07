## O(n): Linear Time

**O(n)** means an algorithm takes longer as the input grows. It usually processes each item once.

```js
function printItems(items) {
	for (const item of items) {
		console.log(item);
	}
}
```

If `items` has 5 elements, the loop runs 5 times. If it has 1,000 elements, it runs 1,000 times. The work grows in direct proportion to the input size, so this is **O(n)**.
