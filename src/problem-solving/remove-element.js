const removeElement = function (nums, val) {
    let k = 0;
    for (const element of nums) {
        if (element === val) {
            nums[k] = element;
            k++;
        }
    }
    return k;
};

console.log(removeElement([3, 2, 2, 3], 3));