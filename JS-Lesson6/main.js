// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world','lorem ipsum', 'javascript is cool'
const hello ='hello world'
const lorem = 'lorem ipsum'
const jsCool = 'javascript is cool'
console.log(hello.length);
console.log(lorem.length);
console.log(jsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(hello.toUpperCase());
console.log(lorem.toUpperCase());
console.log(jsCool.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(hello.toLowerCase());
console.log(lorem.toLowerCase());
console.log(jsCool.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const dirtyString = ' dirty string   '
const cleanedDirtyString = dirtyString.trim()
console.log(cleanedDirtyString.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let arr = str.split(' ');
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const arrNums = [10,8,-7,55,987,-1011,0,1050,0];
let string = arrNums.map(value => value.toString())
console.log(string)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
function sortNums(direction, arr) {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a)
    }
    return arr
}

console.log(sortNums('ascending', nums))
console.log(sortNums('descending', nums))
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => (b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let newCourses = coursesAndDurationArray.filter((value => value.monthDuration > 5));
console.log(newCourses);
//     cards: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// описати колоду карт
const cards = [
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'heart', color: 'red'}
]
const cardNames = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
let allCards = [];

for (const card of cards) {
    for (const cardName of cardNames) {
        const allCard = {
            cardSuit: card.cardSuit,
            value: cardName,
            color: card.color
        }
        allCards.push(allCard)
    }
}
console.log(allCards)

// - знайти піковий туз
const ace = allCards.filter(value => value.cardSuit === 'spade' && value.value === 'ace')
console.log(ace);
// - всі шістки
const allSixes = allCards.filter(value => value.value === 6)
console.log(allSixes);
// - всі червоні карти
const allRedCards = allCards.filter(value => value.color === 'red')
console.log(allRedCards);
// - всі буби
const allDiamonds = allCards.filter(value => value.cardSuit === 'diamond')
console.log(allDiamonds);
// - всі трефи від 9 та більше
const allSpadesFromNine = allCards.filter(value => value.cardSuit === 'spade' && value.value >= '9')
console.log(allSpadesFromNine);
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const cardsBySuit = allCards.reduce((acumulator, value) => {
    if (value.cardSuit === 'spade') {
        acumulator.spades.push(value)
    } else if (value.cardSuit === 'diamond') {
        acumulator.diamonds.push(value)
    } else if (value.cardSuit === 'heart') {
        acumulator.hearts.push(value)
    } else if (value.cardSuit === 'clubs') {
        acumulator.clubs.push(value)
    } else {
        console.log('Error')
    } return acumulator

}, {spades:[],diamonds:[],hearts:[], clubs:[]})

console.log(cardsBySuit);