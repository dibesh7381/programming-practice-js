function linearSearch(arr, target) { // here we create a function with an array parameter

  for (let i = 0; i < arr.length; i++) {  //  here the loop  is run until array length

    if (arr[i] === target) { // here we check if (arr[o] === target)
        return i; // here we return index where target is found
    }
  }
  return -1; //if target is not mathched we return -1
}

// Example
const numbers = [10, 20, 30, 40, 50]; // here the user given array
const target = 30; // here the target value

const index = linearSearch(numbers, target);  // here we call our function and store it in a variable

if (index !== -1) {  // here we check if index !== -1 it runs
  console.log(`Element found at index: ${index}`); 
} else { // if false it runs
  console.log("Element not found");
}
