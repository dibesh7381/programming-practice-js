function countOccurrences(arr) {
    let unique = []
    for (let i = 0; i < arr.length; i++) {
       if (unique[i]) continue;
       let count = 1

       for (let j = i + 1; j < arr.length; j++) {
           if (arr[i] === arr[j]){
              count++
              unique[j] = true
           }
       }

       console.log(arr[i] + " occures " + count + " times")
    }
}

// Example
countOccurrences([1, 2, 2, 3, 3, 3, 4]);
