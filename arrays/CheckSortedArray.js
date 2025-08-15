function isSorted(arr) {  // here we create a function with parameter of an array
     let isSorted = true  // here we create a boolean variable with value is true

  for (let i = 0; i < arr.length - 1; i++) {  // here the loop is run until arraylength - 1 times
    if (arr[i] > arr[i + 1]) {  // here we check if array value is (arr[0] > arr[0 + 1 = 1])
       isSorted = false  // we change the boolean value to false
       break;  // here we break the loop execution 
    }
  }
   if (isSorted){  // if it is true it runs
     console.log("Array is sorted")
   }
   else{  // if false it runs
     console.log("Array is not sorted")
   }
}


isSorted([1,2,3,4,5])
isSorted([3,2,4,1])



// Array sorted in desceding order :- 
// function isSortedDesc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSortedDesc([5, 4, 3, 2, 1])); // true
// console.log(isSortedDesc([5, 6, 4]));       // false