 
const findMissing = (arr,n) => {    // here findMissing is a function which wants two argument
    let index = (n * (n + 1)) / 2   // sum of 1..n
    let sum = 0  // here value is 0
    for (let i = 0; i < arr.length; i++) {  // here the loop is run until arrays length
        sum += arr[i]  // here we sum the total value from the array
    }
    return index - sum  // here we return (index - sum = value) it is the missing value
}


// example :- 
const data = [1,2,4,5]  
let n = 5
console.log(findMissing(data,n))
