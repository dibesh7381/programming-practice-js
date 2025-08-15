function maxSubarraySum(arr) {
    let maxSoFar = arr[0]; // overall maximum sum
    let maxEndingHere = arr[0]; // maximum sum ending at current index

    for (let i = 1; i < arr.length; i++) {
        // Either start a new subarray at arr[i] or extend the previous subarray
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

        // Update overall maximum sum if needed
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arr)); // Output: 6 (subarray [4,-1,2,1])
