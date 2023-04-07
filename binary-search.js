/**
 * 
 * @param {Array<int>} sortedArr 
 * @param {Int} target 
 * @returns {boolean}
 * @description binary search function, given an array, locate the
 *              target by continously halfing the array
 */
const binarySearch = (sortedArr, target) => {
    let left = 0,
        right = sortedArr.length - 1,
        mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        console.log(mid);
        if (sortedArr[mid] === target) {
            return true;
        } else if (sortedArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

console.log(binarySearch([-1, 0, 3, 5, 6, 8, 10], 10))
console.log(binarySearch([-1, 0, 3, 5, 7, 8, 9], 10))

const shiftedBinarySearch = (shiftedArr, target) => {

}

console.log(shiftedBinarySearch([5, 6, 8, 10, -1, 0, 3], 10))
