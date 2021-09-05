let test1 = ['red', 'green'];
let test2 = ['red'];
console.log([...test1, ...test2]);

let test3 = {
    "red" : 11,
    "green" : 22
}
let test4 = {
    "red" : "ok"
}
console.log({...test3, ...test4});