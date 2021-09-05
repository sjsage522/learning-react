const obj = {
    message: "함수를 다른 값과 마찬가지로 객체에 추가할 수도 있습니다.",
    log(message) {
        console.log(this.message)
        console.log(message);
    }
}

obj.log(obj.message);

//
const messages = [
    "함수를 배열에 넣을 수도 있습니다.",
    message => console.log(message),
    "일반적인 값과 마찬가지 입니다.",
    message => console.log(message)
];

messages[1](messages[0]);
messages[3](messages[2]);

//
const insideFn = logger => {
    logger("함수를 다른 함수의 인자로 넘길수도 있습니다.");
};

insideFn(message => console.log(message));

// 함수가 함수를 인자로 받는 경우와 함수가 함수를 반환하는 경우를 고차함수라고 부른다.
const createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!");
    };
};

const scream = createScream(message => console.log(message));
scream('함수가 함수를 반환할 수도 있습니다.');
scream('createScream은 함수를 반환합니다.');
scream('scream은 createScream이 반환한 함수를 가리킵니다.');