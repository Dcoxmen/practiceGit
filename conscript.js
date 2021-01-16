'use strict';

const Person = function(firstName, birthYear) {
this.firstName = firstName;
this.birthYear = birthYear;
}

const Bob = new Person('Bob', 1997)
const Mary = new Person('Mary', 1988)
const Chet = new Person('Chet', 1977)
console.log(Bob, Mary, Chet)
console.log(Bob instanceof Person)