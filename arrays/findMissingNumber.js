function findMissingNumber(arr, n) {  // here a function is declare and it want two argument
    let sum = 0; // here we declare a sum variable with value 0
    let total = 0; // here we declare a total variable with value 0

    for (let i = 1; i <= n; i++) {  // This loop is run until n 
        total += i; // here we count our value and stored in the total variable (total = 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10) based on user input
    }

    for (let i = 0; i < arr.length; i++) { // here the loop is run until array length which is give the user
        sum += arr[i]; // here we sum all the array value ([1,2,3,5] => sum = 11)
    }

    return total - sum;  // here we return the value that is (10 - 11 = 1) 1 is missing 
}


const arr = [1, 3, 4, 5, 6,]; // here we declare an array for use
const n = 6; // here we give our original length of our array
console.log(findMissingNumber(arr, n)); // here we show our result
