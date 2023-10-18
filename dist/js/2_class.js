"use strict";
console.log("class 2");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Object Oriented Programming with Typescript...
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Student {
    constructor(n, r) {
        this.name = n;
        this.rollNo = r;
        this.skills = [];
    }
    addSkill(s) {
        this.skills.push(s);
    }
    getSkills() {
        console.log(this.skills);
    }
}
const student1 = new Student("Ashar", 11);
student1.addSkill("typesrcipt");
// student1.skills[2] = "java"; // not assign, because it is private...
console.log(student1, 'new student');
// console.log(student1.skills, 'not access due to private');
// solution is to used getSkills functions....
console.log(student1.getSkills());
