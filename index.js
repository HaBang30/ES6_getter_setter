// Exercise: using getter and setter in ES6:
// This is my code
// class Person {
//     constructor(name, constructor){
//         this._name = name;
//        this.constructor = constructor;
//     } 

//     get name() {
//         return this._name 
//     }
//     set name(newName) {
//         this._name = newName
//     }
//     walk() {
//         this._name = "duyen";
//         this.constructor = " can to walking, running and swimming";
//         return this._name + this.constructor;
//     }
// }



// class Programmer extends Person {
//     constructor(name, constructor, language) {
//         super(name, constructor);
//         this._language = language;
//     }

//     get language() {
//         return this._language 
//     }
    
//     set language(newLanguage) {
//         this._language = newLanguage 
//     }
//     writeCode() {
//         if (this._language === "reactJs") {
//             return this._name + " has 3 years to experience about developer";
//         } else if (this._language === "node.js") {
//             return this._name + " has 5 years to experience about developer";
//         } else {
//             return this._name + " has 10 years to experience about developer";
//         }
//     } 

// }
// let test = new Programmer("ha bang", "can  to walking or running", "node.js");

// // using getter and setter to change name:
// console.log(test.name);
// test.name = "duyen";
// console.log(test.name)

// // output walk() method:
// console.log(test.walk());

// // output programming language:
// console.log(test.language);
// test.language = "reactJs";
// console.log(test.language);

// // output writeCode:
// console.log(test.writeCode());

//========This is code of chatGPT, look at it is perfect======


class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    walk() {
        console.log(`${this._name}  is walking and running`);
    }
}


class Programmer extends Person {
    constructor(name, language) {
        super(name);
        this._language = language;
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }
    writeCode() {
        console.log(`${this._name} is writing ${this._language} code`);
    }
}

console.log("Output person1:");
const person1 = new Programmer("duyen", " JavarScript, reactJS, node.JS");
// Output name of person1:
console.log(person1.name);// duyen
// output walk method:
person1.walk(); // duyen is walking and running.
// output programming language:
person1.writeCode();

// =======######============
console.log("Output person2:");
const person2 = new Programmer("ha bang", " PHP, Python, nodeJS");
// Output name of person1:
console.log(person2.name);// ha bang
// output walk method:
person2.walk(); // ha bang is walking and running.
// output programming language:
person2.writeCode();
