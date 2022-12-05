// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function threeNumbers(a,b,c) {
//     if (a > b && b < c) {
//         console.log(b)
//     } else if ( b > a && a < c){
//         console.log(a)
//     } else if (b > c && c < a) {
//         console.log(c)
//     } else {
//         console.log('Error')
//     }
// }
//
// console.log(threeNumbers(100,445,45))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function threeNumbers(a,b,c) {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if ( b > a && b > c){
//         console.log(b)
//     } else if (c > a && c > b) {
//         console.log(c)
//     } else {
//         console.log('Error')
//     }
// }
//
// console.log(threeNumbers(100,445,1000))

// - створити функцію яка повертає найбільше число з масиву
// const arr = [10, 20, 30, 40, 50];
// function maxArray(array) {
//     let maxArray = array[0];
//     for (const item of array) {
//         if (item > maxArray) {
//             maxArray = item
//         }
//     }
//     return maxArray
// }
//
// console.log(maxArray(arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const arr = [1, 2, 3];
// const averageValue = (array) => {
//     let sum = 0;
//     for (const item of array) {
//         sum += item
//     }
//     return sum/arr.length
// }
// console.log(averageValue(arr))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function maxAndMin(...arguments) {
//     let min = arguments[0]
//     let max = arguments[0]
//     for (const argument of arguments) {
//         if (argument > max) {
//             max = argument
//         }
//         if (argument < min) {
//             min = argument
//         }
//     }
//     console.log(max)
//     return min
// }
// const arr1 = maxAndMin(1, 2, 3, 4, 5)
// console.log(arr1)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let array = [];
// function arrayFilling(emptyArray) {
//     for (let i = 0; i < 5; i++) {
//        array[i] = Math.round(Math.random() *100)
//     }
//     console.log(array);
// }



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let array = [];
// function arrayFilling(limit) {
//     for (let i = 0; i < limit; i++) {
//        array[i] = Math.round(Math.random() * 100)
//     }
//     console.log(array);
// }
// arrayFilling(10)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
