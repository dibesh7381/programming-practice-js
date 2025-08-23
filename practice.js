const missingNum = (arr,n) => {
    let missingIndex = (n * (n + 1)) / 2
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
    }

    return missingIndex - sum
}

let element = [1,3,4,5]
let target = 5
const data = missingNum(element,target)
console.log(data)