// let schools = [
//     "Yorktown",
//     "Washington & Lee",
//     "Wakefield"
// ];
//
// const highSchools = schools.map(school => ({name : school}));
// console.log(highSchools);

//
const editName = (oldName, name, arr) =>
    arr.map(item => (item.name === oldName ? ({...item, name}) : item));

let schools = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Lee" },
    { name: "Wakefield" }
]

let updateSchools = editName("Stratford", "HB Woodlawn", schools);
console.log("updatedSchools :", updateSchools);
console.log("schools :", schools);