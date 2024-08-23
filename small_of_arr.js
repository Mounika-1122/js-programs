function findLeastFrequentSmallest(arr) {
    const frequencyMap = new Map();

    // Count the frequency of each integer
    for (let num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let leastFrequent = null;
    let minFrequency = Infinity;

    // Iterate through the frequency map to find the least frequent smallest number
    for (let [num, frequency] of frequencyMap) {
        if (frequency < minFrequency || (frequency === minFrequency && num < leastFrequent)) {
            minFrequency = frequency;
            leastFrequent = num;
        }
    }

    return leastFrequent;
}

// Example usage:
const inputArray = [2,2,1,1,3,3,3];
console.log(findLeastFrequentSmallest(inputArray)); // Output: 2
