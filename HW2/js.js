//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)




// Створення масиву з 10 елементами різного типу
let myArray = [10, 'Hello', true, { name: 'Dmytro', age: 25 }, null, undefined, [1, 2, 3], NaN, -5, 3.14];


// Виведення кожного елемента масиву в консоль
myArray.forEach(item => console.log(item));


// Створення об'єктів, що описують книги без авторів
let book1 = { title: 'The Great Gatsby', pageCount: 218, genre: 'Fiction' };
let book2 = { title: 'To Kill a Mockingbird', pageCount: 281, genre: 'Classics' };
let book3 = { title: 'Harry Potter and the Philosopher\'s Stone', pageCount: 309, genre: 'Fantasy' };


//Створення об'єктів, що описують книги з вказанням авторів
let bookWithAuthors1 = {
    title: 'The Great Gatsby',
    pageCount: 218,
    genre: 'Fiction',
    authors: [{ name: 'F. Scott Fitzgerald', age: 44 }]
};

let bookWithAuthors2 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Classics',
    authors: [{ name: 'Harper Lee', age: 89 }]
};

let bookWithAuthors3 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 309,
    genre: 'Fantasy',
    authors: [{ name: 'J.K. Rowling', age: 56 }]
};


//Створення масиву з об'єктами користувачів та виведення їх паролів
let users = [
    { name: 'John', username: 'john_doe', password: 'password1' },
    { name: 'Alice', username: 'alice_smith', password: 'secure123' },
    { name: 'Bob', username: 'bob_johnson', password: 'bobpass' },
    // Додаткові користувачі
];

users.forEach(user => console.log(user.password));


//Логічні розгалуження
let x = 0; // Змінна x зі значенням 0

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// Перевірка для a = 1, 0, -3
let a = 1;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

a = 0;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

a = -3;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


//Перевірка до якої четверті години попадає число
let time = 30; // Припустимо, що це кількість хвилин

if (time >= 0 && time <= 59) {
    let quarter = Math.ceil(time / 15); // Розрахунок четверті години
    console.log('Час попадає в', quarter, 'чверть години');
} else {
    console.log('Некоректне значення часу');
}


//Визначення у яку половину місяця потрапляє число
let day = 16; // Припустимо, що це число дня в місяці

if (day >= 1 && day <= 31) {
    let decade = Math.ceil(day / 10); // Розрахунок декади місяця
    console.log('Число потрапляє в', decade, 'декаду місяця');
} else {
    console.log('Некоректне значення числа');
}


//Складання розкладу на тиждень за допомогою switch
let dayOfWeek = 3; // Припустимо, що 1 - понеділок, 2 - вівторок, і т.д.

switch (dayOfWeek) {
    case 1:
        console.log('Понеділок - робочий день');
        break;
    case 2:
        console.log('Вівторок - робочий день');
        break;
    case 3:
        console.log('Середа - робочий день');
        break;
    // Додаткові випадки для інших днів тижня
    default:
        console.log('Вихідний день');
        break;
}


//Знаходження максимального числа серед двох введених користувачем:
let num1 = +prompt('Введіть перше число:');
let num2 = +prompt('Введіть друге число:');

if (isNaN(num1) || isNaN(num2)) {
    console.log('Ви ввели некоректне число');
} else if (num1 === num2) {
    console.log('Числа рівні');
} else if (num1 > num2) {
    console.log('Максимальне число:', num1);
} else {
    console.log('Максимальне число:', num2);
}


//Присвоєння значення "default", якщо змінна х є falsy
x = x || 'default'; // Присвоєння "default", якщо x є falsy

console.log(x); // Якщо x не було ініціалізовано, виведе "default"


