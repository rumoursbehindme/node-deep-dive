function mergeSorted(arr1, arr2, arr1Len, arr2Len, arr3) {

    arr3 = [...arr1, ...arr2];
    return arr3.sort((a,b)=> a-b);
    // let i = 0, j = 0, k = 0;
    // while (i < arr1Len) {
    //     arr3[k++] = arr1[i++];
    // }
    // while (j < arr2Len) {
    //     arr3[k++] = arr2[j++];
    // }

    // for (let inc = 0; inc < arr3.length; inc++) {

    // }
}

const arr1 = [26, 41, 65, 97];
const arr2 = [31, 52, 731];
const arr1Len = arr1.length;
const arr2Len = arr2.length;

console.log(mergeSorted(arr1, arr2, arr1Len, arr2Len, new Array(arr1Len + arr2Len)))