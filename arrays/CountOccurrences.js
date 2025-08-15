function countOccurance(arr){  // here we create a function with an array argument

   let obj = {}  // here we create an empty object

   for (let i = 0; i < arr.length; i++) {  // here the loop is running until arrays length

     const element = arr[i]  // here we select current element

      if (obj[element]){  // here we check obj[1] value exist or not if exist set its value 1 + 1 = 2
         obj[element] += 1
      }
      else{  // if not this code runs and set obj[1] = 1
        obj[element] = 1
      }
   }

   return obj  // here we return our object
}

// example :- 
const arr = [1,1,2,3,3,4,5]  
const data = countOccurance(arr)

for (const key in data) {
   console.log(key + " => " + data[key])
}