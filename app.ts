// Basic Generic
function echo(data: any) {
    return data;
}

console.log(echo('San'));
console.log(echo(42));
console.log(echo({ name: 'San', age: 42 }));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('San').length);
console.log(betterEcho<number>(42));
console.log(betterEcho({ name: 'San', age: 42 }));

// Built in Generics
const results: Array<number> = [1.99, 2.33];
results.push(3.66);
console.log(results);
// results.push('San');     // compile-time error

// Alternately
class Person {
    name: string;
}
class Employee extends Person {
    department: number;
}
class Animal {
    breed: string;
}

let workers: Array<Person> = [];
workers[0] = new Person();
workers[1] = new Employee();
// workers[2] = new Animal();     // compile-time error

// Another Array Example
function printAll<T>(args: T[]) {
    args.forEach((el) => console.log(el));
}
printAll<string>(['Dogs', 'Cats', 'Mice']);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2('Generic Function Type'));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
    base: T;
    multiplier: T;
    calculate(): number {
        return +this.base * +this.multiplier;
    }
}

const simpleMath = new SimpleMath();
simpleMath.base = 3;
simpleMath.multiplier = 5;
console.log(simpleMath.calculate());

const simpleMath2 = new SimpleMath();
simpleMath2.base = '6';
simpleMath2.multiplier = 5;
console.log(simpleMath2.calculate());