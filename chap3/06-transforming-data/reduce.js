const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) return age;
    else return max;
}, 0);
console.log('maxAge', maxAge);

const max = ages.reduce((max, value) => value > max ? value : max, 0);
console.log('max', max);

//
// const colors = [
//     {
//         id: '-xekare',
//         title: "rad red",
//         rating: 3
//     },
//     {
//         id: '-jbwsof',
//         title: "big blue",
//         rating: 2
//     },
//     {
//         id: '-prigbj',
//         title: "grizzly grey",
//         rating: 5
//     },
//     {
//         id: '-ryhbhsl',
//         title: "banana",
//         rating: 1
//     }
// ]
//
// const hashColors = colors.reduce(
//     (hash, {id, title, rating}) => {
//         hash[id] = {title, rating}
//         return hash
//     },
//     {}
// )
// console.log(hashColors)

//
const colors = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors.reduce(
    (unique, color) => unique.indexOf(color) !== -1 ? unique : [...unique, color],
    []
);
console.log(uniqueColors);