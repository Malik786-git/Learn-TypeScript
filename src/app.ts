
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLASS # 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ! ye sign is liye lagaya hy ke type script ko batane ke liye ke yha lazmi button huga or num2, num2 i hungi. 
// // HTMLinputElemet isliye use kia hy ke num1 lazmi input hi hy,  hu sakta hy ke num1, num2 kisi div ki id hu, tu phr hume no. input kese mile ga. 

// const num1 = document.getElementById('num1')! as HTMLInputElement;
// const num2 = document.getElementById('num2')! as HTMLInputElement;
// const button = document.querySelector('button')!;

// //  kisi bh variable ko type : laga ke dete hein jese nichy n1: number n1 ko number type di hy.
// function sum(n1: number , n2: number) {
//     return n1 + n2;
// }


// button.addEventListener('click', function () {
//     console.log(sum(+num1.value, +num2.value));
// })

// detail about number type: 5, 5.5 , -3
// string same as js string. "all"
// boolean: true, false


// let person = "malik";

// person = 1; // error because by default type select string due to first assignment.

// let p; // warning all type allow

// p = "nadir";  

// ///////////////////////////////////////
// let p:string;

// p = "nadir";  

// let a : string = "Nadir"; // not recommended because by default typescript take it type string

// /////////////////////////////////////
// let names: string[] = [];
// names.push(3); // error 
// names.push("3"); // work


// /////////////////////////////////////
// const personObj = {
//     name: "Nadir",
//     age: 23,
//     hobbies: ["Sports"]
// }

// personObj.email = "abc@gmail.com"; // error not suppose default type of email, we need to write type of obj person


// solution
// ? mean email assign kar bh sakte hein or nh bh isliye ? mark de dia.but not recommended 
// const personObj: {name: string; age: number; hobbies: string[]; email?:string} = {
//     name: "Nadir",
//     age: 23,
//     hobbies: ["Sports"]
// }

// personObj.email = "abc@gmail.com"; // error not suppose default type of email, we need to write type of obj person

// Recommended must assign obj key, 
// const personObj: {name: string; age: number; hobbies: string[]; email:string} = {
//     name: "Nadir",
//     age: 23,
//     hobbies: ["Sports"],
//     email: ""
// }

// personObj.email = "abc@gmail.com"; 


////////////////////////////////////////
// make person type object for more better 
// type Person = {
//     name: string;
//     age: number;
//     hobbies: string[];
//     email:string
// }
// const personObj: Person = {
//     name: "Nadir",
//     age: 23,
//     hobbies: ["Sports"],
//     email: ""
// }

// personObj.email = "abc@gmail.com"; 

// // if we have multiple obj of type Person and we make a array of this person obj.

// const persons: Person[] = [];

// persons.push(personObj); // not error becuase personObj is type Person, not accpeted any other type obj in this array
// persons.push({
//     name: "Qadir",
//     age: 43,
//     hobbies: ["Chess"],
//     email: ""
// }
// ) // no error because obj have same Person Type


// ==============================================================
// Fixed length of array


// const statusCode = [404, "Not Found"]; // it is not fixed size
// // fixedd
// const stat: [number, string] = [200, "ok"];
// // stat[2] = 'sfsf'; //erro
// stat.push('ishaq') // not error this is typescript bug

// ========================================
// ASSIGN MULTI TYPE
// let data : string | number;
// data = 'malik';
// data = 38;


// ============================================
// function fun(n1: number, n2: number, cond: string) {
//     if (cond === 'add') {
//         return n1 + n2;
//     }else
//     if (cond === 'sub') {
//         return n1 - n2;
//     }
// }

// console.log(fun(3, 5, "divide")) // not complain type script because condition satisfy. but we want only two type of sting add or sub
// solution
// function fun(n1: number, n2: number, cond: "add"| "subtract") {
//     if (cond === 'add') {
//         return n1 + n2;
//     }else
//     if (cond === 'subtract') {
//         return n1 - n2;
//     }
// }

// console.log(fun(3, 5, "divide")) // show error
// console.log(fun(3, 5, "add")) // run 

// ========================================================
// its mean MyFun ko aesa function assigne huga is me 2 argument hungy number wale or jo return bh number kare ga.


// let MyFun: (x: number, y: number) => number;


//                                     // return type 
// function fun(n1: number, n2: number) : number  {
//         return n1 + n2;
// }


// MyFun = fun;...


////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const btn = document.getElementById("btn") !;

function fun1(data:string) {
    console.log("Hello"+ " " + data);   
}

btn.addEventListener("click", fun1.bind(null,"World!"));





