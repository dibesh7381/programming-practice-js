function maxTwoDistinctSum(arr) {
  let max1 = arr[0];  // here we set a variable placeholder for future use
  let max2 = arr[0]; // here we set a variable placeholder for future use

  for (let i = 0; i < arr.length; i++) {  // here the loop is run until the length of the array
    let current = arr[i];  // here we set (current = arr[0] = 10)

    if (current === max1 || current === max2) continue;  // here we check if our value (10 === 10) or (10 === 10) true it runs and stop iterate one time

    if (current > max1) {  //  here if (current > max1) it runs
      max2 = max1;  // here we use our future variable here we do value swapping
      max1 = current; // max1 = current here we find first largest number from array
    } else if (current > max2) {   // if uppercase is not true it runs
      max2 = current;  // max2 = current  here we find second largest number from array
    }
  }

  return max1 + max2;  // here we add two variable value [first largest + second largest]
}

// Example:
const arr = [1, 2, 2, 3, 4, 4, 5, 15];
console.log(maxTwoDistinctSum(arr));
