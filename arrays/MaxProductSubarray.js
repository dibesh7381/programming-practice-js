function maxProductSubarray(arr) {
    if (arr.length === 0) return 0;

    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];

        // If current element is negative, swap max and min
        if (num < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        // Update maxProduct and minProduct
        maxProduct = Math.max(num, maxProduct * num);
        minProduct = Math.min(num, minProduct * num);

        // Update result
        result = Math.max(result, maxProduct);
    }

    return result;
}

// Example
const arr = [2,3,-2,4];
console.log(maxProductSubarray(arr)); // Output: 6 ([2,3])
