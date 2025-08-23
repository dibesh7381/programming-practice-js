const removeDuplicates = (numbers)  => { // here we create a function with parameter of an array

   let unique = []  // here we create a empty array

   for (let i = 0; i < numbers.length; i++) {   // here the outer loop is run until the numbers array length by user input
       let isUnique = false   // here create a boolean variable default value is false

       for (let j = 0; j < unique.length; j++) {  // here the outer loop is run until empty array length
           if (numbers[i] === unique[j]){  // here we check if numbers[i] === unique[j]
              isUnique = true  // here we change our boolean variable default value 
              break // here we break the execution
           }
       }

       if (!isUnique){  // here if the value is !true / !false it runs
          unique.push(numbers[i])  // here we insert the non duplicate value in the empty array
       }
   }

   return unique  // here we return the array
}


// example :-

const numbers = [1,2,3,3,2,4,5]
const uniqueNumbers = removeDuplicates(numbers);


console.log("Original Array:", numbers);
console.log("Array without duplicates:", uniqueNumbers);
