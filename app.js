var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Generic
function echo(data) {
    return data;
}
console.log(echo('San'));
console.log(echo(42));
console.log(echo({ name: 'San', age: 42 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('San').length);
console.log(betterEcho(42));
console.log(betterEcho({ name: 'San', age: 42 }));
// Built in Generics
var results = [1.99, 2.33];
results.push(3.66);
console.log(results);
// results.push('San');     // compile-time error
// Alternately
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var workers = [];
workers[0] = new Person();
workers[1] = new Employee();
// workers[2] = new Animal();     // compile-time error
// Another Array Example
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
printAll(['Dogs', 'Cats', 'Mice']);
// Generic Types
var echo2 = betterEcho;
console.log(echo2('Generic Function Type'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.base * +this.multiplier;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.base = 3;
simpleMath.multiplier = 5;
console.log(simpleMath.calculate());
var simpleMath2 = new SimpleMath();
simpleMath2.base = '6';
simpleMath2.multiplier = 5;
console.log(simpleMath2.calculate());
