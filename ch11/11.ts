function sum(number1: number, number2: number): number {
  return number1 + number2;
}

function isChildren(age: number): boolean {
  return age < 19;
}

function sum2(number1: number, number2: number): void {
  console.log(number1 + number2);
}

function morning(name?: string): string {
  return `Good morning ${name || "everyone"}`;
}

function moring(time: number, name?: string): string {
  return `Good morning${name || "everyone"}. Time is ${time || 8}`;
}

function sum3(a: number, b = 2022): number {
  return a + b;
}

function sum4(...numbers: number[]): number {
  return numbers.reduce((result, number) => result + number, 0);
}

interface User {
  name: string;
  age: number;
  init(this: User): () => {};
}

let user1: User = {
  name: "mjo",
  age: 20,
  init: function (this: User) {
    return () => {
      return this.age;
    };
  },
};

let getAge = user1.init();
let age = getAge();
console.log(age);

function sum7(a: string, b: string): string;
function sum7(a: number, b: number): string;

function sum7(a: any, b: any): any {
  return a + b;
}
console.log(sum7(1, 2));

export { User };
