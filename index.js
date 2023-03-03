// Мережа фастфудів пропонує кілька видів гамбургерів:

// маленький (50 грн, 20 калорій);
// великий (100 грн, 40 калорій).


// Гамбургер може бути з одним із декількох видів начинок:

// сиром (+ 10 грн, + 20 калорій);
// салатом (+ 20 грн, + 5 калорій);
// картоплею (+ 15 грн, + 10 калорій).


// Можна додати добавки:

// посипати приправою (+15 грн, 0 калорій)
// полити майонезом (+ 20 грн, +5 калорій).


// Напишіть програму, яка розраховує вартість та калорійність гамбургера.
"use strict"
const hamburgerComponents = {
    SIZE_SMALL:{
        price : 50,
        calories: 20
    },
    SIZE_BIG:{
        price : 100,
        calories: 40
    },
    STUFFING_CHEESE:{
        price : 10,
        calories: 20
    },
    STUFFING_SALAD:{
        price : 20,
        calories: 5
    },
    STUFFING_POTATO:{
        price : 15,
        calories: 10
    },
    TOPPING_SAUCE:{
        price : 15,
        calories: 0
    },
    TOPPING_MAYO:{
        price : 20,
        calories: 5
    }
}

class Hamburger {
    price = 0;
    calories = 0;
    constructor(size, stuffing){
        this.price += size.price + stuffing.price;
        this.calories += size.calories + stuffing.calories;
    }

    addTopping(topping){
        this.price += topping.price;
        this.calories += topping.calories;
    }

    calculatePrice(){
        return this.price;
    }
    calculate(){
        return this.calories;
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(hamburgerComponents.SIZE_SMALL, hamburgerComponents.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(hamburgerComponents.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(`Calories:  ${hamburger.calculate ()}`);

// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(hamburgerComponents.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);