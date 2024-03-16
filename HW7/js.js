/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)

- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 */




// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
    this.id= id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
};
let kokos=new User(1,'kokos','tvv','qwee@mail.com',+54578)
console.log(kokos)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log

let userArr =[];
userArr.push( new User(1,'name1','surname1','email1@mail.com',+1234));
userArr.push(new User(2,'name2','surname2','email2@mail.com',+2345));
userArr.push(new User(3,'name3','surname3','email3@mail.com',+3456));
userArr.push(new User(4,'name4','surname4','email4@mail.com',+4567));
userArr.push(new User(5,'name5','surname5','email5@mail.com',+5678));
userArr.push(new User(6,'name6','surname6','email6@mail.com',+6789));
userArr.push(new User(7,'name7','surname7','email7@mail.com',+78910));
userArr.push(new User(8,'name8','surname8','email8@mail.com',+891011));
userArr.push(new User(9,'name9','surname9','email9@mail.com',+9101112));
userArr.push(new User(10,'name10','surname10','email10@mail.com',+10111213));




console.log(userArr);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUser=userArr.filter(value => value.id%2===0);
console.log(filteredUser);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser =userArr.sort((a, b) => {return b.id-a.id;});
console.log(sortUser);

console.log

class Client {
    constructor(id, name, surname , email, phone, ...order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this. phone=phone;
        this.order=order;
    }
}



// створити пустий масив, наповнити його 10 об'єктами Client
let clientArr =[];

clientArr[0]= new Client(1,'name1','surname1', 'email1',+123, '1','2','3');
clientArr[1]= new Client(2,'name2','surname2', 'email2',+234, '2','3','4');
clientArr[2]= new Client(3,'name3','surname3', 'email3',+345, '3','4','5','2','3','4');
clientArr[3]= new Client(4,'name4','surname4', 'email4',+456, '4','5','6','2','3','4','2','3','4');
clientArr[4]= new Client(5,'name5','surname5', 'email5',+567, '5','6','7','2','3');
clientArr[5]= new Client(6,'name6','surname6', 'email6',+678, '6','7');
clientArr[6]= new Client(7,'name7','surname7', 'email7',+789, '7');
clientArr[7]= new Client(8,'name8','surname8', 'email8',+8910, '8','9','10');
clientArr[8]= new Client(9,'name9','surname9', 'email9',+91011, '9','10','11','11');

console.log(clientArr)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSort=clientArr.sort((a, b) => {return a.order.length-b.order.length} );
console.log(clientSort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. Додати в об'єкт функції:

function Car(model,manufacture,year,speed,engine) {
    this.model=model;
    this.manufacture=manufacture;
    this.year=year;
    this.speed=speed;
    this.engine=engine;
}


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину
Car.prototype.drive=function () {
    return `Їдемо зі швидкістю ${this.speed} на годину`;
}

let car1=new Car('model1', 'manufacture1',2012,220,'2.5 turbo');
console.log(car1.drive());
console.log('')


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info=function () {
    return`
    Модель: ${this.model}
    Виробник: ${this.manufacture}
    Рік випуску: ${this.year}
    Максимальна швидкість: ${this.speed}
    Об'єм двигуна: ${this.engine}`
}
console.log(car1.info());
console.log('');

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Car.prototype.increaseMaxSpeed=function (newSpeed) {
    return this.speed+newSpeed;
}
console.log(car1.increaseMaxSpeed(100));
console.log('');

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear =function (newValu) {
    return this.year+newValu;
}
console.log(car1.changeYear(1000));
console.log('');

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


Car.prototype.addDriver=function (name,licence) {
    return this.addDriver ={name,licence};
}
console.log(car1.addDriver('Dima',true))

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
console.log('Класи')
class Cars {
    constructor(model, manufacture, year, speed, engine) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }
    drives () {
        return `Їдемо зі швидкістю ${this.speed} на годину`;
    };
    info () {
        return`
    Модель: ${this.model}
    Виробник: ${this.manufacture}
    Рік випуску: ${this.year}
    Максимальна швидкість: ${this.speed}
    Об'єм двигуна: ${this.engine}`
    };

    increaseMaxSpeed (newSpeed) {
        return this.speed+newSpeed;
    };

    changeYear (newValu) {
        return this.year + newValu;
    };
    addDriver=function (name,licence) {
        return this.addDriver ={name,licence};
    }








}
let classCars=new Cars('model2', 'manufacture2',2020,300,'2.0 TSFI');
console.log(classCars);
console.log(classCars.drives());
console.log(classCars.info());
console.log(classCars.increaseMaxSpeed(100));
console.log(classCars.changeYear(100));
console.log(classCars.addDriver('Dmytro',25));




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Popeluchka(name, year, feetSize) {
    this.name=name;
    this.year=year;
    this.feetSize=feetSize;
}
let popelychki = [];
popelychki[0]=new Popeluchka('name1',1980,31);
popelychki[1]=new Popeluchka('name2',1985,32);
popelychki[2]=new Popeluchka('name3',1990,33);
popelychki[3]=new Popeluchka('name4',1995,34);
popelychki[4]=new Popeluchka('name5',2000,35);
popelychki[5]=new Popeluchka('name6',2005,36);
popelychki[6]=new Popeluchka('name7',2010,37);
popelychki[7]=new Popeluchka('name8',2015,38);
popelychki[8]=new Popeluchka('name9',2020,39);
popelychki[9]=new Popeluchka('name10',2025,40);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Pric {
    constructor(name, year, chose) {
        this.name = name;
        this.year = year;
        this.chose = chose;
    }

}
let princ = new Pric('Dima',1998, 25);
console.log(popelychki);
console.log(princ)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < popelychki.length; i++) {
    if (princ.chose === popelychki[i].feetSize){
        console.log('Вона');
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let ona = popelychki.find(value => value.feetSize===princ.chose);
ona ? console.log('Вона') : console.log('no');