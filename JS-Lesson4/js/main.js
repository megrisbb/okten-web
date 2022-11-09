// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for ( let i = 0; i < 10; i++) {
    document.write(`<div>Text</div>`)
}

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
const users = [
    {name: 'Bodia'},
    {name: 'Bodia'},
    {name: 'Bodia'},
    {name: 'Bodia'},
    {name: 'Bodia'},
    {name: 'Bodia'},
    {name: 'Bodia'},
    {name: 'Bodia'},
    {name: 'Bodia'},
    {name: 'Bodia'},
];
for ( let i = 0; i < users.length ; i++) {
    let user = users[i];
    document.write(`<div>User - ${user.name} </div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while ( i < 20) {
    document.write(`<h1>New Text</h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let a = 0;
while ( a < 20) {
    document.write(`<h1>First text ${a}</h1>`);
    a++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// for (let list = 0; list < listOfItems.length; list++) {
//     document.write(`<ul><li>${list} </li></ul>`);
// } Чому тут не хоче виводити?

for (let list of listOfItems) {
    document.write(`<ul><li>${list} </li></ul>`);
}

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію Великими літерами прописанні властивості об'єкту
// які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let j = 0; j < products.length; j++) {
    const product = products[j];
    document.write(`<div>
                        <h3 class="product-title"> ${product.title} - ${product.price} UAH</h3>
                        <img src="${product.image}" alt="#" class="product-image" >
                    </div>`)

}



// є масив
let ourUsers = [
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

// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

for (const user of ourUsers) {
 if (user.status) {
     console.log(user);
 }
}

for (const user of ourUsers) {
    if (!user.status) {
        console.log(user);
    }
}

for (const user of ourUsers) {
    if (user.age > 30) {
        console.log(user);
    }
}
