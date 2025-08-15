function countOccurrence(arr){
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (obj[element]){
            obj[element] += 1
        }
        else{
            obj[element] = 1
        }
    }

    return obj
}

const arr = [1,1,2,3,4,4,5,6,6,7]
const data = countOccurrence(arr)
for(const key in data){
    console.log(key + " => " + data[key])
}