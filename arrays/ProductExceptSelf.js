function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Step 1: calculate left products
    let left = 1;
    for (let i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }

    // Step 2: calculate right products and multiply
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
}

// Example
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]

