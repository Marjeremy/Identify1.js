const sortedInventory = [10, 20, 30, 40, 50, 60, 70];

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {      
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return `Found ${target}`;
        } else if (arr[mid] < target) {
                     left = mid + 1;
        } else {
                 right = mid - 1;
        }
    }
    return `${target} not found`;
};

console.log(binarySearch(sortedInventory, 30));

module.exports = { binarySearch };

//The time complexity of the provided binarySearch function is O(log n), where n is the length of
//the array. This is because the search space is halved with each iteration of the loop. The space
//complexity is O(1) since only a constant amount of extra space is used (variables left, right, and mid)