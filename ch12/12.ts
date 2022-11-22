class Calendar {
  month: string;

  constructor(month: string) {
    this.month = month;
  }

  getMonth(): string {
    return this.month;
  }
}
const calendar = new Calendar("May");
console.log(calendar.getMonth());

class Calendar2 {
  month1: string;
  month2: string = "Jun";

  constructor(month: string) {
    this.month1 = month;
  }
}

const calendar2 = new Calendar2("May");

console.log(calendar2.month2);
console.log(calendar2.month1);

class Calendar3 {
  constructor(private readonly month: string) {}

  getMonth() {
    return this.month;
  }
}

class Calendar4 {
  private month: string;

  public constructor(month: string) {
    this.month = month;
  }

  private getMonth(): string {
    return this.month;
  }
}

const calendar4 = new Calendar4("May");
// console.log(calendar5.getMonth());

class Calendar5 {
  private readonly month: string;

  public constructor(month: string) {
    this.month = month;
  }

  private getMonth(): string {
    return this.month;
  }
}

const calendar5 = new Calendar5("May");
// console.log(calendar5.month);

class User {
  public constructor(public name: string, public age: number) {}

  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
}

class newUser extends User {
  public constructor(name: string, age: number) {
    super(name, age);
  }
}

let user1 = new User("영희", 20);
console.log(user1.getName());
console.log(user1.getAge());

export { User };

interface User2 {
  name: string;
  age: number;
  getAge(age: number): void;
}

class newUser2 implements User2 {
  name: string = "철수";
  age: number = 20;
  getAge(age: number) {
    console.log(this.age);
  }
  constructor() {}
}

let user2 = new newUser2();

interface User3 {
  name: string;
  age: number;
  getAge(age: number): void;
}

class newUser3 implements User3 {
  constructor(public name: string, public age: number) {}
  getAge(age: number) {
    console.log(this.age);
  }
}

let user3 = new newUser("영희", 20);
user3;

abstract class Circle {
  public abstract getArea(): number;

  public printArea(): string {
    return `${this.getArea()}`;
  }
}

class ShapeArea extends Circle {
  public constructor(protected readonly radius: number) {
    super();
  }

  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new ShapeArea(10);

console.log(myCircle.printArea());
