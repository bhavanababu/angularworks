"use strict";
// console.log("hello word");
exports.__esModule = true;
exports.Person = void 0;
var person = {
    id: 100,
    name: "bhavana",
    salary: 23000
};
console.log(person.salary);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printPerson = function () {
        console.log("inside");
    };
    return Person;
}());
exports.Person = Person;
