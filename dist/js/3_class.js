"use strict";
console.log("class 3");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Interfaces, Advanced Types, Type Guards, Union & Intersect
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1.
// type Person = {
//     name: string;
// };
// interface  Person {
//     name: string;
// };
// let person1: Person;
// person1 = {
//   name: "Nadir",
// }
// NOTE:
// interface and type are same but interface support classes
// /////////////////////////////////////
// 2.
// interface  Person {
//     name: string;
//     speak(sentence: string): void;
// };
// class Human implements Person {
//    constructor(public name: string, public age: number){}
//    speak(sentence: string): void {
//    }
// }
// NOTE:
// using interface if we make a object of person so its not allow to make extra property like person phone etc. because it is not define in interface,
// but if we make a class using person interface, so we add extra property like phone etc, but the interface property must be given ...
// 3. (Advanced Types)
//(a) union type
// type CombinedType  = string | number;
// let abc: CombinedType;
// abc = "hello";
// abc = 12;
// abc = false //error
//(b) intersection type
// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }
// type Animal = {
//     name: string;
//     runningSpeed: number;
// }
// // we want to used both type in one object...
// type Creature = Bird & Animal;
// let xyz: Creature;
// xyz = {
//     name: 'Hen',
//     flyingSpeed: 5,
//     runningSpeed: 10
// }
// do ti same thing with interfaces
// interface Bird {
//     name: string;
//     flyingSpeed: number;
// }
// interface Animal {
//     name: string;
//     runningSpeed: number;
// }
// we want to used both type in one object...
// interface Creature extends Bird, Animal {};
// let xyz: Creature;
// xyz = {
//     name: 'Hen',
//     flyingSpeed: 5,
//     runningSpeed: 10
// }
// console.log(xyz, 'intersection with interface');
//(c) Type Guards
// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }
// type Animal = {
//     name: string;
//     runningSpeed: number;
// }
// type Creature = Bird | Animal;
// function fun1(creature:Creature) {
//     console.log(creature.name);
//     // here error, because it is not clear the type of creature is bird or animal so we handle it using type guard
//     if ("runningSpeed" in creature) {
//         console.log(creature.runningSpeed);
//     }
//     if ("flyingSpeed" in creature) {
//         console.log(creature.flyingSpeed);
//     }
// }
// fun1({
//     name: "hen",
//     runningSpeed: 45
// })
// ////////////////////////////////////////
// with classes
class Bird {
    constructor(name, flySpeed) {
        this.name = name;
        this.flySpeed = flySpeed;
    }
}
class Animal {
    constructor(name, runningSpeed) {
        this.name = name;
        this.runningSpeed = runningSpeed;
    }
}
function fun(creature) {
    if (creature instanceof Animal) {
        console.log(creature.runningSpeed);
    }
    if (creature instanceof Bird) {
        console.log(creature.flySpeed);
    }
}
fun(new Animal("Dog", 14));
