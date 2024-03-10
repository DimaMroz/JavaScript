//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }





// Знайти та вивести довжину настипних стрінгових значень
const stringsLength = ['hello world', 'lorem ipsum', 'javascript is cool'].map(str => str.length);
console.log(stringsLength); // [11, 11, 17]

// Перевести до великого регістру наступні стрінгові значення
const uppercaseStrings = ['hello world', 'lorem ipsum', 'javascript is cool'].map(str => str.toUpperCase());
console.log(uppercaseStrings); // ["HELLO WORLD", "LOREM IPSUM", "JAVASCRIPT IS COOL"]

// Перевести до нижнього регістру настипні стрінгові значення
const lowercaseStrings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].map(str => str.toLowerCase());
console.log(lowercaseStrings); // ["hello world", "lorem ipsum", "javascript is cool"]

// Почистити "брудну" стрінгу від зайвих пробілів
const dirtyString = ' dirty string   ';
const cleanString = dirtyString.trim();
console.log(cleanString); // 'dirty string'

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів
const stringToArray = (str) => str.split(' ');
const str = 'Ревуть воли як ясла повні';
const arr = stringToArray(str);
console.log(arr); // ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// є масив чисел. За допомоги map перетворити всі об'єкти в масиві на стрінгові
const numbersToStrings = [10, 8, -7, 55, 987, -1011, 0, 1050, 0].map(num => String(num));
console.log(numbersToStrings); // ["10", "8", "-7", "55", "987", "-1011", "0", "1050", "0"]

// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.slice().sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.slice().sort((a, b) => b - a);
    } else {
        console.error('Invalid direction. Please use "ascending" or "descending".');
        return nums;
    }
};

const nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]

//----------------------------------
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

// Відсортувати його за спаданням за monthDuration
const sortedCourses = coursesAndDurationArray.slice().sort((a, b) => b.monthDuration - a.monthDuration);
console.log("Sorted Courses:", sortedCourses);

// Відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
const longDurationCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log("Long Duration Courses:", longDurationCourses);

// За допомогою map перетворити кожен елемент на наступний тип { id, title, monthDuration }
const transformedCourses = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log("Transformed Courses:", transformedCourses);

//----------------------------------------------------
// Опис колоди карт
const cardDeck = [];

const suits = ['spades', 'diamonds', 'hearts', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

suits.forEach(suit => {
    values.forEach(value => {
        let color = (suit === 'diamonds' || suit === 'hearts') ? 'red' : 'black';
        cardDeck.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    });
});

// Видалення дублікатів
const uniqueCardDeck = Array.from(new Set(cardDeck.map(card => JSON.stringify(card)))).map(card => JSON.parse(card));

// За допомогою reduce упакувати всі карти по "мастях" в об'єкт
const packedCards = uniqueCardDeck.reduce((accumulator, currentCard) => {
    accumulator[currentCard.cardSuit].push(currentCard);
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(packedCards);
