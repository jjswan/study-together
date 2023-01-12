// #2.1 Basic Data Types

// number
// integer
2;
// float
1.5;

// string
('hello');
'hello' + ' my name is hd'; // -> hello my name is hd

// #2.2 Variables
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

// 변수의 필요성 - 프로그래머들은 게으르다. 더 게으르고 싶어한다.
// 변수는 값을 저장하거나 유지하는 역할을 한다.

// const - 변하지 않는
const a = 45;
const b = 20;

console.log(a + b);
console.log(a * b);
console.log(a / b);

const myName = 'HD'; // 변수명은 카멜 케이스

console.log(`Hello ${myName}`);

// #2.3 const and let
// 변수를 만드는 두 가지 방법
// 1. const - 값이 바뀔 수 없다. 값을 보호할 수 있다. 기본적으로 사용하자.
// 2. let - 값이 바뀔 수 있다. 업데이트가 필요할 때. 필요할 때 사용하자.
// 두 개의 변수 만드는 방법으로 개발자의 의도를 알 수 있다.
// 처음에는 var로 변수를 만들었다. 하지만 이는 이제 쓰지 않도록 하자.

let food = '피자';
console.log(`나는 ${food}을 좋아해`);

food = '햄버거';
console.log(`나는 ${food}을 좋아해`);

// myName = 'KH'; -> main.js:44 Uncaught TypeError: Assignment to constant variable.

// #2.4 Boolean
// 참과 거짓
const amIFass = true;
const amITeacher = false;

const nothing = null; // 아무것도 없다. 아무것도 아닌 것, 자연적으로 발생하기 어렵다.

let something;
console.log(something); // undefined, 정의되지 않았다. 메모리에 자리는 차지하고 있다.

// #2.5 Array
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// Get Item from Array
console.log('금요일', daysOfWeek[4]); // 컴퓨터는 0부터 센다.

// Add one more day to the array
daysOfWeek.push('sun');
console.log('일요일', daysOfWeek[6]);

// #2.6 Object
const player = {
  name: 'HD',
  age: 30,
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.age);
player.points = player.points + 5;
player.lastName = 'potato';
console.log(player);

// #2.7~2.8 Function

function sum(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

function divide(a, b) {
  console.log(`${a} / ${b} = ${a / b}`);
}

sum(2, 3);
divide(23, 7);

const player2 = {
  name: 'HD',
  sayHello(name) {
    console.log(`Hello ${this.name}! I'm ${name}:)`);
  },
};

player2.sayHello('홍동');
player2.sayHello('병연');

// #2.11 Returns

const calculator = {
  plus(a, b) {
    return a + b;
  },

  times(a, b) {
    return a * b;
  },
};

const result = calculator.plus(2, 5);

const age = 96;
function calKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calKrAge(age);
console.log(krAge);

// #2.13~15 Conditionals
const app = {
  age,

  init() {
    this.age = Number(prompt('당신의 나이는?'));
    this.validate();
  },

  validate() {
    if (isNaN(this.age)) return this.init();
    if (this.age < 1) return this.printError();

    this.checkAge();
  },

  printError() {
    alert('나이는 음수가 될 수 없어요!!');
    this.init();
  },

  checkAge() {
    if (this.age < 18) return alert('당신은 음주, 흡연을 할 수 없어요:(');
    if (this.age > 50 && this.age < 100)
      return alert('음주, 흡연을 할 수 있지만 건강을 생각하세요!');
    if (this.age > 100) return alert('마음껏 즐기세요!');

    alert('당신은 음주, 흡연을 즐길 수 있어요:)');
  },
};

app.init();
