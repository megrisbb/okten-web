// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const user1 = new User (1, 'Bodia', 'Barylaik', 'masdasd@gmail.com', '3809745412')
// const user2 = new User (23, 'Andrii', 'asdaads', 'adsa@gmail.com', '452524554')
// const user3 = new User (32, 'Ira', 'sdsasda', '32123dd@gmail.com', '242452452')
// const user4 = new User (56, 'Oleh', 'adadsas', 'asd23112@gmail.com', '424524242')
// const user5 = new User (123, 'Ihor', 'adasd', 'dsada@gmail.com', '424245245245252')
// const user6 = new User (23, 'Pavlo', 'asdsad', '2313dfdsa@gmail.com', '452452424')
// const user7 = new User (33, 'Nadiya', 'asdsd', 'adad321@gmail.com', '424524524')
// const user8 = new User (65, 'Inna', 'adsadsada', 'sadsad2323@gmail.com', '42452542')
// const user9 = new User (67, 'Bodia', 'adada', 'da3231@gmail.com', '42452452')
// const user10 = new User (98, 'Dima', 'Baryasdadasdaslaik', 'dasdasd@gmail.com', '4245245245')
// console.log(user1)


// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [];
// users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(users)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// const userFilter = users.filter(value => value.id % 2 === 0)
// console.log(userFilter)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const userId = users.sort((a, b) => a.id - b.id)
// console.log(userId);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const user11 = new Client (1, 'Bodia', 'Barylaik', 'masdasd@gmail.com', '3809745412', ['asdasd'])
// const user12 = new Client (23, 'Andrii', 'asdaads', 'adsa@gmail.com', '452524554', ['sadasad', 'sdasdasas'])
// const user13 = new Client (32, 'Ira', 'sdsasda', '32123dd@gmail.com', '242452452', ['sadasad', 'sdasdasas', 'addssa'])
// const user14 = new Client (56, 'Oleh', 'adadsas', 'asd23112@gmail.com', '424524242', ['sadasad', 'sdasdasas', 'sadasad', 'sdasdasas', 'asdadssd'])
// const user15 = new Client (123, 'Ihor', 'adasd', 'dsada@gmail.com', '424245245245252', ['sadasad', 'sdasdasas'])
// const user16 = new Client (23, 'Pavlo', 'asdsad', '2313dfdsa@gmail.com', '452452424', ['sadasad', 'sdasdasas', 'asdadssd'])
// const user17 = new Client (33, 'Nadiya', 'asdsd', 'adad321@gmail.com', '424524524', ['sadasad', 'sdasdasas'])
// const user18 = new Client (65, 'Inna', 'adsadsada', 'sadsad2323@gmail.com', '42452542', ['sadasad', 'sdasdasas'])
// const user19 = new Client (67, 'Bodia', 'adada', 'da3231@gmail.com', '42452452', ['sadasad', 'sdasdasas'])
// const user20 = new Client (98, 'Dima', 'Baryasdadasdaslaik', 'dasdasd@gmail.com', '4245245245', ['sadasad', 'sdasdasas'])


// створити пустий масив, наповнити його 10 об'єктами Client
// const clients = [];
// clients.push(user11,user12,user13,user14,user15,user16,user17,user18,user19,user20)
// console.log(clients)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// const clientsSort = clients.sort((a,b) => a.order.length - b.order.length)
// console.log(clientsSort);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
// }
// const ourCars = new Car('X5', 'BMW', 2020, 243 , '3.0L',)
// console.log(ourCars)


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// Car.prototype.drive = function () {
//     return (`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
// console.log(ourCars.drive())


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed = this.maxSpeed + newSpeed;
// }
// ourCars.increaseMaxSpeed(200)
// console.log(ourCars)



// -- changeYear (newValue) - змінює рік випуску на значення newValue
// Car.prototype.changeYear = function(newValue) {
//     this.year = newValue;
// }
// ourCars.changeYear(2021)
// console.log(ourCars)


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Car.prototype.addDriver = function (driver) {
//     this.driver = driver;
// }
// ourCars.addDriver('Bodia')
// console.log(ourCars)



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     engineCapacity;
//
// }
//
// const ourCars = new Car('X5', 'BMW', 2020, 243 , '3.0L',)
// console.log(ourCars)



// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// Car.prototype.drive = function () {
//     return (`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
// console.log(ourCars.drive())


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed = this.maxSpeed + newSpeed;
// }
// ourCars.increaseMaxSpeed(200)
// console.log(ourCars)


// -- changeYear (newValue) - змінює рік випуску на значення newValue
// Car.prototype.changeYear = function(newValue) {
//    this.year = newValue;
// }
// ourCars.changeYear(2021)
// console.log(ourCars)


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Car.prototype.addDriver = function (driver) {
//     this.driver = driver;
// }
// ourCars.addDriver('Bodia')
// console.log(ourCars)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let cinderellas = [
//     new Cinderella('sada', 21, 35),
//     new Cinderella('asdasd', 25, 32),
//     new Cinderella('asdsad', 35, 31),
//     new Cinderella('asdasda', 45, 36),
//     new Cinderella('assadasd', 22, 35),
//     new Cinderella('adasdsa', 23, 32),
//     new Cinderella('asdsadasdas', 18, 38),
//     new Cinderella('sadaad', 28, 34),
//     new Cinderella('adasdsd', 20, 34),
//     new Cinderella('adasdsd', 20, 34)
//     ]
// console.log(cinderellas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let сharles = new Prince('Charles', 32, 31)
// console.log(сharles)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку