function subarrayWithSum(arr, target) {
    let start = 0;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        // Shrink window from start if sum > target
        while (sum > target && start <= end) {
            sum -= arr[start];
            start++;
        }

        // Check if sum equals target
        if (sum === target) {
            return arr.slice(start, end + 1); // return the subarray
        }
    }

    return null; // no subarray found
}

// Example
const arr = [1, 2, 3, 7, 5];
const target = 12;
console.log(subarrayWithSum(arr, target)); // Output: [2,3,7]
