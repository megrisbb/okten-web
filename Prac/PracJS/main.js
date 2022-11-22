//
// --створити масив з:
// - та вивести його в консоль
//     - з 5 числових значень
// const firstArray = [2, 6, 8, 10, 20];
// for (const number of firstArray) {
//     console.log(number);
// }
// - з 5 стічкових значень
// const secArray = ['arr', 'sad', 'sda', 'adsad', 'dsfdsf'];
// for (const string of secArray) {
//     console.log(string);
// }
//
// - з 5 значень стрічкового, числового та булевого типу
// let thirdArray = [1, 'dsffsd', true, false, 3];
// for (let i = 0; i < thirdArray.length; i++) {
//     const thirdArrayElement = thirdArray[i];
//     console.log(thirdArrayElement);
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr.push(45, 'adas', true)
// for (const arrElement of arr) {
//     console.log(arrElement)
// }

// - є масив
// const array = [2,17,13,6,22,31,45,66,100,-18];


// // 1. перебрати його циклом while
// let i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++;
// }

// 2. перебрати його циклом for
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < array.length) {
//     if (i % 2 ) {
//         console.log(array[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if ( i % 2) {
//         console.log(arrayElement)
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     if (i % 3 === 0) {
//         array[i] = 'okten';
//     }
//     console.log(array[i])
// }

// 8. вивести масив в зворотньому порядку.
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const number of arr) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
// for (const string of arr) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// const array = [1, 2, 3, 4, 5, 'six', 'seven', true, false, true];
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const array = [1, 2, 3, 4, 5, 'six', 'seven', true, false, true];
// for (const arrayElement of array) {
//     if (typeof arrayElement === "string") {
//         console.log(arrayElement);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// const arr = [];
// arr.push(1, 2, 3, 4, 5, 'six', 'seven', true, false, true);
// for (const arrElement of arr) {
//     console.log(arrElement);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Крок ${i}</div>`)
//     console.log('Крок', i);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     document.write(`<div>Крок ${i}</div>`)
//     console.log('Крок', i);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     document.write(`<div>Крок ${i}</div>`)
//     console.log('Крок', i);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//        document.write(`<div>Крок ${i}</div>`)
//    console.log('Крок', i);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//     document.write(`<div>Крок ${i}</div>`)
//    console.log('Крок', i);
//     }
// }
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// const books = [
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
//         authors: ['Author 1'],
//         genres: ['sdfdfs', 'sfsfdfd']
//     },
//     {
//         title: 'Simpsons',
//         numberOfPages: 452,
//         authors: ['Bart Simspon', 'Homer Simpson'],
//         genres: ['Comedy']
//     }
// ];
// -знайти наібльшу книжку.
// let count = books[0]
// for (const book of books) {
//     if (book.numberOfPages > count.numberOfPages) {
//         count = book
//     }
// }
// console.log(count);

// - знайти книжку/ки з найбільшою кількістю жанрів
// let mostGenres = books[0]
// for (const book of books) {
//     if (book.genres.length > mostGenres.genres.length) {
//         mostGenres = book;
//     }
// }
// console.log(mostGenres);

// - знайти книжку/ки з найдовшою назвою
// let count = books[0]
// for (const book of books) {
//     if (book.title.length > count.title.length) {
//         count = book;
//     }
// }
// console.log(count);

// - знайти книжку/ки які писали 2 автори
// let count = books[0]
// for (const book of books) {
//     if (book.authors.length === 2) {
//         count = book;
//     }
// }
// console.log(count);

// - знайти книжку/ки які писав 1 автор
// let count = books[0]
// for (const book of books) {
//     if (book.authors.length === 1) {
//         count = book;
//     }
// }
// console.log(count);

// 1. Створити пустий масив та :
// const array = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0, j = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         array[j] = i
//         j++
//     }
// }
// console.log(array);

// Varian 2
// for (let i = 0; i < 50; i++) {
//     array[i] = 2 * i
// }
// console.log(array);

//     b. заповнити його 50 непарними числами за допомоги циклу..
// for (let i = 0, j = 0; i < 100; i++) {
//     if (i % 2) {
//         array[j] = i
//         j++
//     }
// }
// console.log(array);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * 100);
// }
// console.log(array);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < array.length; i+=3) {
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < array.length; i+=3) {
//     if (array[i] % 2 === 0) {
//     console.log(array[i]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let i = 0, j = 0; i < newArr.length; i+=3) {
//     if (array[i] % 2 === 0) {
//         newArr[j] = array[i];
//         j++;
//     }
// }
// console.log(newArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// const arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
// let check = 0;
// for (const number of arr) {
//     check += number;
// }
// let averageCheck = Math.floor(check/arr.length);
// console.log(averageCheck);
//

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let i = 0; i < newArr.length; i++) {
//     newArr[i] = arr[i] * 5;
// }
// console.log(newArr);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом
// - додати його в інший масив.



