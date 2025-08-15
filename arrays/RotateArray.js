// Original array
let arr = [1, 2, 3, 4, 5];
let k = 2; // Number of steps to rotate

// Function to rotate array to the right by k steps
function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k > n
  const rotated = [];

  // Loop through array and calculate new positions
  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = arr[i];
  }

  return rotated;
}

// Call the function
const rotatedArray = rotateRight(arr, k);

// Print the result
console.log("Original Array:", arr);
console.log(`Array rotated to the right by ${k} steps:`, rotatedArray);
