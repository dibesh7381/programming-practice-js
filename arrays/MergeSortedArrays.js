function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0; // pointer for arr1
    let j = 0; // pointer for arr2

    // Compare elements and push smaller one
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Push remaining elements from arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // Push remaining elements from arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// Example
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));
// Output: [1,2,3,4,5,6,7,8]
