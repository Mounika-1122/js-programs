//Write a function that merges two sorted arrays into a single sorted array.
function mergeArray(arr1, arr2) {
    const mergedArr = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements of arr1 (if any)
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    // Add remaining elements of arr2 (if any)
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

console.log(mergeArray([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
