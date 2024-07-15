const array = [3, 3, 1, 5, 3, 4, 1, 1, 6, 7, 2, 2, 6];
let map = {};

array.forEach(ele => {
    if (map[ele] === undefined) {
        map[ele] = 1;
    }
    else {
        map[ele]++;
    }
})
console.log('The Map: ')
console.log(map);
for (let key in map) {
    console.log(`${key} occurred: ${map[key]} times`);
}