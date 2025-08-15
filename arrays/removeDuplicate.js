function removeDuplicates(arr) {  // here we create a function with a parameter an array

    const result = [arr[0]]; // here we store array first element (result = [arr[0] value suppose = 1 => result = [1]])

    for (let i = 1; i < arr.length; i++) {  // here the loop is running until array length

        if (arr[i] !== arr[i - 1]) {  // here we check with previous value if arr[1] !== arr[1 - 1 = 0]
            result.push(arr[i]);  // here we push our values in the result array
        }
    }

    return result;  // here we return our result array
}

// Example
const arr = [1, 1, 2, 2, 3, 4, 4, 5]; 
console.log(removeDuplicates(arr)); // Output will be come : [1,2,3,4,5]
