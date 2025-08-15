const sumOfElements = (arr) => { // here we create an arrow function which is need an array of user input
    let sum = 0;  // here we set our sum value is 0 
    for (let i = 0; i < arr.length; i++) {  // here the loop is run until the array length
        sum += arr[i];  // here we store the sum of all array elements
    }
    return sum; // here we return the sum of total value
}

const arr = [1,2,3,4,5]; // here we declare our array
console.log(sumOfElements(arr));  // here we call and print our result that is (1 + 2 + 3 + 4 + 5 = 15)
