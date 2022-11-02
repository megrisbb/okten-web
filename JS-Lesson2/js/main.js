// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let firstArray = [1, 2, 3, 'Name', true, -500, 3.14, 22, false];
console.log(firstArray[0]);
console.log(firstArray[1]);
console.log(firstArray[2]);
console.log(firstArray[3]);
console.log(firstArray[4]);
console.log(firstArray[5]);
console.log(firstArray[6]);
console.log(firstArray[7]);
console.log(firstArray[8]);
console.log(firstArray[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const firstBook = {
    title: 'Не озирайся і мовчи',
    pageCount: 512,
    genre: 'Сучасна проза'
};
const secondBook = {
    title: 'Біллі Саммерс',
    pageCount: 608,
    genre: 'Детективи'
};
const thirdBook = {
    title: 'Убивчий холод',
    pageCount: 352,
    genre: 'Трилери'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

const fourthBook = {
    title: 'Не озирайся і мовчи',
    pageCount: 512,
    genre: 'Сучасна проза',
    authors: [
        {name: 'Макс Кідрук', age: 35}
    ]
};
const fifthBook = {
    title: 'Біллі Саммерс',
    pageCount: 608,
    genre: 'Детективи',
    authors: [
        {name: 'Стівен Кінг', age: 59}
    ]
};
const sixthBook = {
    title: 'Убивчий холод',
    pageCount: 352,
    genre: 'Трилери',
    authors: [
        {name: 'Тесс Ґеррітсен', age: 45}
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Bodia', username: 'Mik23', password: 'qwert123'},
    {name: 'Oleh', username: 'Olehhh', password: '323dd@dds'},
    {name: 'Ihor', username: 'mikym', password: 'dsada232'},
    {name: 'Dima', username: 'dmytro234', password: 'dsdszxc332'},
    {name: 'Serhiy', username: 'sergo', password: 'jhjh434324'},
    {name: 'Andiy', username: 'Ander231d', password: 'Ddsfasd32213d'},
    {name: 'Kostia', username: 'Kosti', password: 'asdasd434'},
    {name: 'Inna', username: 'Innaaaa', password: 'dsadad1312'},
    {name: 'Anna', username: 'Annastas', password: 'dasdasd32'},
    {name: 'Nadia', username: 'Nidiyka', password: 'adsasdasd3211'}
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);
