const digitSum = (num) => {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;         // Add last digit to sum
    num = Math.floor(num / 10); // Remove last digit
  }

  return sum;
};

// Example usage:
console.log(digitSum(123));   // Output: 6 (1 + 2 + 3)
console.log(digitSum(4567));  // Output: 22 (4 + 5 + 6 + 7)
