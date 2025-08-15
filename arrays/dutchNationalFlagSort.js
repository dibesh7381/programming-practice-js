function dutchNationalFlagSort(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            // swap arr[low] and arr[mid]
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else { // arr[mid] === 2
            // swap arr[mid] and arr[high]
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

// Example
const arr = [2, 0, 2, 1, 1, 0];
console.log(dutchNationalFlagSort(arr)); // Output: [0,0,1,1,2,2]
