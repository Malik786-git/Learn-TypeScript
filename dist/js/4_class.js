"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("class 4");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Type Casting, Generics, Decorators & Function Overloading
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. type casting...
// const elem = document.getElementById("input") ! as HTMLInputElement;
// or
const elem = document.getElementById("input");
console.log(elem.value);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. generics...(for provide additional information)
// wrong
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 2000);
});
// error, because typescript never know the return of promise is string or not...
// promise.then((res) => res.split(""));
// so we used generic to provide extra info..
// right
//type promise, with return string....
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 2000);
});
//already know this promise return string...
promise2.then((res) => res.split(""));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// helper function...
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const merged = merge({ name: "owais" }, { age: 24 });
// const merged2 = merge({name: 'owais'}, 4) // not give err, because random type supposed because of U
console.log(merged.age);
// solution is to block other type except object
function merge2(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const merged2 = merge2({ name: "owais" }, { age: 24 });
// const merged3 = merge2({name: 'owais'}, 4) // give err, for type is not object
console.log(merged2.age);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. Decorators is function (always used in class)
// Note: decorators in typescript are experimental phase, so need to used it,
// goto the tsconfig.js and uncomment this  "experimentalDecorators": true,
// function Logger(constructor: Function) {
//   console.log("Loggin...", constructor);
// }
// or if no need of constructor console in Logger functions
// function Logger(_: Function) {
//   console.log("Loggin...");
// }
// @Logger
// class Person {
//   name = "nadir";
//   constructor() {
//     console.log("constructor call person name:", this.name);
//   }
// }
// const nadir = new Person();
///////////////////////////////////////////
// correct way to make decorator functions...
// function Logger(data:string) {
//   return function (_: Function) {
//     console.log("Loggin...", data);
//   };
// }
// @Logger("data")
// class Person {
//   name = "nadir";
//   constructor() {
//     console.log("constructor call person name:", this.name);
//   }
// }
// const nadir = new Person();
///////////////////////////////////////////
// practical way to used decorator
function FillHTML(template, id) {
    return function (_) {
        const elem = document.getElementById(id);
        if (elem) {
            elem.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "nadir";
        console.log("constructor call person name:", this.name);
    }
};
Person = __decorate([
    FillHTML("<h1>This is my person</h1>", "app")
], Person);
const nadir = new Person();
