
function findLeaders(arr) {  // here we declare a fuction we accept an array inside
  const leaders = [];   // here we declare an empty array
  let maxFromRight = arr[arr.length - 1];  // here we store the array value (arr[5 - 1 = 4]) here we store last element of an array
  leaders.push(maxFromRight);  // here we insert the last value in leaders empty array


  for (let i = arr.length - 2; i >= 0; i--) {  // here the loop is run backwards from (suppose array length is 5 ) i = 3; i >=0; i--
    if (arr[i] > maxFromRight) {  // here we check if arr[3] > arr[4] is true
      leaders.push(arr[i]);   // we insert it into  our leaders array
      maxFromRight = arr[i]; // here also we set the value in the variable called maxFromRight
    }
  }


  return leaders.reverse();  // here we reverse our leaders array for find leaders values in ascending order
}


const arr = [16, 17, 4, 3, 5, 2];  // here we take an array

const leadersArray = findLeaders(arr);   // here we call the function and stores in a variable


console.log("Original Array:", arr);  // here we print original array
console.log("Leaders in the Array:", leadersArray); // here we print the leader value array
