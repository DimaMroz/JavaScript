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



//Функція для обчислення площі прямокутника зі сторонами а і б:
function calculateRectangleArea(a, b) {
    return a * b;
}

//Функція для обчислення площі кола з радіусом r:
function calculateCircleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

//Функція для обчислення площі циліндру з висотою h та радіусом r:
function calculateCylinderArea(h, r) {
    return 2 * Math.PI * r * (h + r);
}

//Функція, яка приймає масив та виводить кожен його елемент:
function printArrayElements(arr) {
    arr.forEach(element => console.log(element));
}

//Функція, яка створює параграф з текстом (текст задається через аргумент):
function createParagraph(text) {
    document.write('<p>' + text + '</p>');
}

//Функція, яка створює список ul з трьома елементами li (текст li задається через аргумент):
function createListWithSameItems(text, itemCount) {
    document.write('<ul>');
    for (let i = 0; i < itemCount; i++) {
        document.write('<li>' + text + '</li>');
    }
    document.write('</ul>');
}

//Функція, яка приймає масив примітивних елементів (числа, строки, булеві), та будує для них список:
function createListFromArray(arr) {
    document.write('<ul>');
    arr.forEach(element => document.write('<li>' + element + '</li>'));
    document.write('</ul>');
}

//Функція, яка приймає масив об'єктів з полями id, name, age, та виводить їх в документ (для кожного об'єкту окремий блок):
function displayObjects(arr) {
    arr.forEach(obj => {
        document.write('<div>');
        for (let key in obj) {
            document.write('<p>' + key + ': ' + obj[key] + '</p>');
        }
        document.write('</div>');
    });
}

//Функція, яка повертає найменше число з масиву:
function findMinimumNumber(arr) {
    return Math.min(...arr);
}

//Функція sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його:
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

//Функція swap(arr, index1, index2), яка міняє місцями значення у відповідних індексах:
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

//Функція обміну валюти exchange(sumUAH, currencyValues, exchangeCurrency):
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }
    return sumUAH / exchangeRate;
}
