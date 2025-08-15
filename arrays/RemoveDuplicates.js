
function removeDuplicates(arr) {
    let uniqueArr = []

    for (let i = 0; i < arr.length; i++) {
        let isUnique = false

        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]){
                isUnique = true
                break
            }
        }

        if(!isUnique){
            uniqueArr.push(arr[i])
        }

    }

            return uniqueArr
}


const numbers = [1,2,3,3,2,4,5]
const uniqueNumbers = removeDuplicates(numbers);


console.log("Original Array:", numbers);
console.log("Array without duplicates:", uniqueNumbers);
