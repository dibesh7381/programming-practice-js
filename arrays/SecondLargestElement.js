function secondLargest(arr) {
    if (arr.length < 2) return null; // agar 2 ya usse kam elements ho

    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;  // largest change hone se pehle, largest ko second me daal do
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];  // largest se chhota aur second se bada → second update
        }
    }

    return second;
}

// Example
const arr = [10, 5, 8, 12, 7];
console.log(secondLargest(arr)); // Output: 10
