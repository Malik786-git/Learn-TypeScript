console.log("class 2");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Object Oriented Programming in Typescript...
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Student {
//     name: string;
//     rollNo: number;
//     private skills: string[];

//     constructor(n: string, r:number) {
//         this.name = n;
//         this.rollNo = r;
//         this.skills = []
//     }
//     addSkill (s: string) {
//         this.skills.push(s)
//     }
//     getSkills () {
//         console.log(this.skills);
//     }
// }

// or

// class Student {
//   private skills: string[];
//   // no one can modify roll no.
//   constructor(public name: string, public readonly rollNo: number) {
//     this.skills = [];
//   }
//   addSkill(s: string) {
//     this.skills.push(s);
//   }
//   getSkills() {
//     console.log(this.skills);
//   }
// }

// const student1 = new Student("Ashar", 11);
// student1.addSkill("typesrcipt");
// // student1.skills[2] = "java"; // not assign, because it is private...
// console.log(student1, "new student");
// // console.log(student1.skills, 'not access due to private');
// // solution is to used getSkills functions....
// console.log(student1.getSkills());

// //////////////////////////////////////
// Inheritance...
// //////////////////////////////////////
// class VStudent extends Student {
//   canVolunteerIn: string[] = [];
//   static id: string = 'abc121212'; // similarly we make static function..
//   constructor(name: string, rollNo: number) {
//     super(name, rollNo);
//   }

//   addVolunteerIn(s: string) {
//     this.canVolunteerIn.push(s);
//   }
//   // getter , like a function but not call with ()
//   get willVolunteerIn() {
//     return this.canVolunteerIn;
//   }
// //   setter
//   set willVolunteerIn(s: string[]) {
//     for (const skill of s) {
//       if (!skill) {
//         return; // no one can assign null value in array
//       }
//     }
//     this.canVolunteerIn = s;
//   }
// }

// const volunteer1 = new VStudent("john", 12);
// volunteer1.addSkill("python");
// volunteer1.addVolunteerIn("exams");
// console.log(volunteer1, "this is volunteer student here");
// volunteer1.willVolunteerIn = ["Apple"];
// console.log(volunteer1.willVolunteerIn);
// console.log(VStudent.id, 'static id variable ');

////////////////////////////////////////////////////////////
// Singletons
////////////////////////////////////////////////////////////

// Define: It is a pattern to restrict a class to make only one object.
class Car {

  static obj: Car;
  private constructor(private name: string) {}

  static getObj(name: string) {
    if (Car.obj) {
      return Car.obj;
    }
    this.obj = new Car(name);
    return this.obj;
  }
}

// const car1 = new Car() // not initialze outside the class, because constructor is private

const car1 = Car.getObj("Toyota");
const car2 = Car.getObj("Honda");

console.log(car1, car2,'cars'); // both of theme is toyota


