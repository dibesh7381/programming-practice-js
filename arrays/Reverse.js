const ReverseArray = (arr) => { // here we declare our function with an array parameter 

    console.log("Original array is : " + arr) // here we print our original array
    let first = 0  // here we set a variable with value 0
    let last = arr.length - 1  // here we set a variable with value array of length - 1 (suppose 5 - 1 = 4)

    while (first < last){  // here the loop is run until 0 < 4  
        let temp = arr[first]  // here we make a temp variable and store arr[0] value
        arr[first] = arr[last]  // here we swap our value (arr[0] = arr[4])
        arr[last] = temp // here (arr[4] = arr[0])

        first++ // here we increse our first value + 1
        last-- // here we decrese our last value - 1
    }

    console.log("Reverse array is : " + arr)  // here we print our reverse array
}

const arr = [1,2,3,4,5]  // here the user given array

ReverseArray(arr) // here we call the function with an array argument

