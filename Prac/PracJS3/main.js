// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//     function cutString(str, n) {
//         let cutStrings = [];
//         for (let i = 0; i < str.length; i+=3) {
//             cutStrings.push(str.substring(i, i+n))
//         }
//         return cutStrings
//     }

// console.log(cutString('наслаждение',3))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     let string = str.slice(0, 7)
//     return string
// }
//
// console.log(delete_characters(str))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// const insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase()
// let insertDash = insert_dash(str)
// console.log(insertDash);
// document.writeln(insert_dash(str));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// const firstLetter = (str) => str[0].toUpperCase() + str.slice(1)
// const str = 'hello my friend'
// console.log(firstLetter(str));
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// const firstName = (name) => n1.replaceAll('.', ' ')
// console.log(firstName(n1))
// const secondName = (name) => n2.replaceAll('-', ' ')
// console.log(secondName(n2))
// const thirdName = (name) => n3.replaceAll('_', ' ')
// console.log(thirdName(n3))
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const random = (numbers) => {
//     let randomNum = [];
//     for (let i = 0; i < 100; i++) {
//         randomNum.push(Math.round(Math.random() * 100))
//     }
//     return randomNum
// }
// const randomNumbers = random()
// console.log(randomNumbers)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// const randomSort = randomNumbers.sort(function (a, b) {
//     return a - b
// })
// console.log(randomSort)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// const randomFilter = randomNumbers.filter(function (value) {
//     return value % 2 === 0
// })
// console.log(randomFilter);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// const str = 'Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу'
// const capitalize = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ')
// console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// function validMail(mail1) {
//     let mail = mail1.toLowerCase()
//     if (!mail.startsWith('@') && mail.includes('@') && mail.includes('.', mail.indexOf('@') + 3)) {
//         console.log('valid')
//     } else {
//         console.log('Not valid')
//     }
// }
//
// validMail('someemail@gmail.com')
// validMail('someeMAIL@gmail.com')
// validMail('someeMAIL@i.ua')
// validMail('SOME.EMAIL@gmail.com')
// validMail('some.email@gmail.com')

// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
// let coursesArray = [
//
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// const sortModuls = coursesArray.sort((a, b) => b.modules.length - a.modules.length)
// console.log(sortModuls);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let stringsearch = "о"
//     let str = "Астрономия это наука о небесных объектах";
// const count = (str, stringsearch) => {
//     let count = 0;
//     let split = str.split('');
//     for (const item of split) {
//         if (item === stringsearch) {
//             count++;
//         }
//     }
//     return count
// }
// console.log(count(str, stringsearch));
// document.writeln(count(str, symb)) // 5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// const cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
// console.log(cutString(str, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// const books = [
//     {
//         title: 'Simpsons',
//         numberOfPages: 452,
//         authors: ['Bart Simspon', 'Homer Simpson'],
//         genres: ['Comedy']
//     },
//     {
//         title: 'Harry Potter',
//         numberOfPages: 234,
//         authors: ['Harry Potter'],
//         genres: ['dfdsfd']
//     },
//     {
//         title: 'South Park',
//         numberOfPages: 100,
//         authors: ['Kenny'],
//         genres: ['Comedy']
//     },
//     {
//         title: 'Cars',
//         numberOfPages: 222,
//         authors: ['Author'],
//         genres: ['sdfdfs', 'sfsfdfd']
//     }
// ];
// -знайти наібльшу книжку.
// let count = books[0]
// for (const item of books) {
//     if ( item.numberOfPages > count.numberOfPages) {
//         count = item;
//     }
// }
// console.log(count);
// - знайти книжку/ки з найбільшою кількістю жанрів
// let genres = books[0]
// for (const item of books) {
//     if ( item.genres.length > genres.genres.length) {
//         genres = item;
//     }
// }
// console.log(genres);

// - знайти книжку/ки з найдовшою назвою
// let mostTitle = books[0]
// for (const item of books) {
//     if ( item.title.length > mostTitle.title.length) {
//         mostTitle = item;
//     }
// }
// console.log(mostTitle);

// - знайти книжку/ки які писали 2 автори
// let twoAuthors = books[0]
// for (const item of books) {
//     if ( item.authors.length > twoAuthors.authors.length) {
//         twoAuthors = item;
//     }
// }
// console.log(twoAuthors);

// - знайти книжку/ки які писав 1 автор
// let oneAuthor = books[0]
// for (const item of books) {
//     if ( item.authors.length < oneAuthor.authors.length) {
//         oneAuthor = item;
//     }
// }
// console.log(oneAuthor);
// let oneAuthor = books[0]
// for (const item of books) {
//     if (item.authors.length === 1) {
//         oneAuthor = item;
//     }
// }
// console.log(oneAuthor);

// - вісортувати книжки по кількості сторінок по зростанню
// const pageShorts = books.sort((a, b) => a.numberOfPages - b.numberOfPages);
// console.log(pageShorts);