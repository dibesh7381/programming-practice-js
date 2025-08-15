const ArrayContainsElement = (arr) => { // here we declare a function with a array parameter
    let target = 3  // here target element is 3
    let isFind = false // here we set a boolean variable value is false

    for (let i = 0; i < arr.length; i++) { // here the loop is run until array length
        if (arr[i] === target){  // here we check if (arr[0] === 3) 
            isFind = true // we change our boolean value to true
            break // here we set break for break this loop after finding target element
        }
    }

    if (isFind){  // here we check if our boolean value is true it runs 
        console.log("Target element is in the array that is : " + target)
    }
    else{ // if false no value is found then it runs
        console.log("No target element is found from the array")
    }
}

const arr = [1,2,3,4,5]  // here the user given array
ArrayContainsElement(arr)  // here we call our function with an array argument