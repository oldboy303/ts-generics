function greet(person) {
    console.log("Hello " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Bob';
}
var person = {
    firstName: 'San',
    age: 42,
    greet: function (lastName) {
        console.log("Hello " + this.firstName + " " + lastName);
    }
};
// greet({ firstName: 'San', age: 42 });
changeName(person);
greet(person);
person.greet('Will');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hello " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Sani';
greet(myPerson);
myPerson.greet('Boy');
var myMultiFunc;
myMultiFunc = function (val1, val2) { return val1 * val2; };
console.log(myMultiFunc(10, 2));
var oldPerson = {
    age: 101,
    firstName: 'Cengiz',
    greet: function (lastName) {
        console.log("Hello " + this.firstName + " " + lastName);
    }
};
oldPerson.greet('Guyer');
