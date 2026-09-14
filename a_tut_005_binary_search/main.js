const numbers = [2, 5, 8, 12, 16, 23, 29, 34, 41, 47, 53, 59, 64, 71, 78]

function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

console.log(`Finding 71 using binearySearch`)
console.log(`result index is ${binarySearch(numbers, 71)}`)
