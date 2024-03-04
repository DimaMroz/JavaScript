//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// Функція для обчислення площі прямокутника
const rectangleArea = (a, b) => a * b;

// Функція для обчислення площі кола
const circleArea = r => Math.PI * Math.pow(r, 2);

// Функція для обчислення площі циліндру
const cylinderArea = (h, r) => 2 * Math.PI * r * (r + h);

// Функція для виведення кожного елемента масиву
const printArrayElements = arr => arr.forEach(element => console.log(element));

// Функція для створення параграфу з текстом
const createParagraph = text => `<p>${text}</p>`;

// Функція для створення списку ul з трьома елементами li
const createList = (text, count) => {
    let list = '<ul>';
    for (let i = 0; i < count; i++) {
        list += `<li>${text}</li>`;
    }
    list += '</ul>';
    return list;
};

// Функція для створення списку ul з числом елементів li, залежно від довжини масиву
const createListFromArray = arr => {
    let list = '<ul>';
    arr.forEach(item => {
        list += `<li>${item}</li>`;
    });
    list += '</ul>';
    return list;
};

// Функція для виведення об'єктів масиву у вигляді блоків
const printObjectsInBlocks = arr => {
    arr.forEach(obj => {
        document.write(`<div> ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age} </div>`);
    });
};

// Функція для пошуку найменшого числа в масиві
const findSmallestNumber = arr => Math.min(...arr);

// Функція для сумування елементів масиву чисел
const sum = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Функція для обміну значеннями у масиві за вказаними індексами
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};

// Функція для обміну валюти
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const currency = currencyValues.find(currency => currency.currency === exchangeCurrency);
    if (currency) {
        return sumUAH / currency.value;
    } else {
        return 'Invalid exchange currency';
    }
};
