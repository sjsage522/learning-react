const countdown = (value, fn, delay=1000) => {
    fn(value);
    return (value > 0) ? setTimeout(()=>countdown(value-1, fn), delay) : value;
};

const log = value => console.log(value);
countdown(10, log);

//
const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};

const deepPick = (fields, object={}) => {
    const [first, ...remaining] = fields.split(".");
    return (remaining.length) ? deepPick(remaining.join("."), object[first]) : object[first];
};

console.log(deepPick("type", dan));
console.log(deepPick("data.info.fullname.first", dan));
