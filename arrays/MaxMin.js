const FindMinMax = (arr) => { // here we create an arrow function with one parameter
   let array = arr  // here we store our array = user input array (arr)
   let max = array[0] // here we create a variable called max and store inside first element from our arrray
   let min = array[0] // here we create a variable called min and store inside first element from our arrray

   for (let i = 1; i < array.length; i++) {  // here our loop is running until array length
       if (array[i] > max){  // here we check if (array[1] > array[0]) true
          max = array[i]  // here we set max = array[i] value
       }
       if (array[i] < min){  // here we check if (array[1] < array[0]) true
          min = array[i]  // here we set min = array[i] value
       }
   }

   console.log("Maximum number from the array is : " + max)  // here we print our max value fron the array
   console.log("Minimum number from the array is : " + min)  // here we print our min value fron the array
}

let arr = [1,2,3,4,5]  // here the array from user

FindMinMax(arr)  // here we call the function with argument it prints : max => 5, min => 1.