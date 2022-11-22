// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b
}

console.log(rectangleArea(12, 28))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(PI, r) {
    return PI * r ** 2;
}

console.log(radius(3.14, 7))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilinder(PI, r, h) {
    return 2 * PI * r * (h + r);
}

console.log(cilinder(3.14, 5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
function allArrays(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
allArrays(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`)
}

paragraph('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function firstList(list) {
    document.write(`<ul>
            <li>${list}</li>
            <li>${list}</li>
            <li>${list}</li>
        </ul>`)
}

firstList(`My List`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function secondList(list, listsNumber) {
    document.write(`<ul>`)
    for (let i = 0; i < listsNumber; i++) {
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`)
}

secondList(`My List`, 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr = [1, 2, 3, true, 'stirng'];

function newArray(array) {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

newArray(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersList = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 1},
    {name: 'kolya', age: 29, id: 1},
    {name: 'olya', age: 28, id: 1},
    {name: 'max', age: 30, id: 1},
    {name: 'anya', age: 31, id: 1},
    {name: 'oleg', age: 28, id: 1},
    {name: 'andrey', age: 29, id: 1},
    {name: 'masha', age: 30, id: 1},
    {name: 'olya', age: 31, id: 1},
    {name: 'max', age: 31, id: 1}];

function firstUsers(users) {
    for (const user of users) {
        document.write(
            `<div>${user.name} - ${user.age} - ${user.id}</div>`
        )
    }
}

firstUsers(usersList)

// - створити функцію яка повертає найменьше число з масиву
let newArr = [1, 2, 3, 4, 5];

function smallestNumber(num) {
    let min = num[0];
    for (const item of num) {
        if (item < min) {
            min = item
        }
    }
    return min
}

const myArray = smallestNumber(newArr)
console.log(myArray);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const firstSum = [5, 5];
function arraySum(sum) {
    let allsum = 0;
    for (const number of sum) {
        allsum += number
    }
    return allsum
}

console.log(arraySum(firstSum));