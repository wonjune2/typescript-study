interface User {
  name: string;
  age: number;
  getAge(age: number): void;
}

class newUser implements User {
  name: string = "철수";
  age: number = 20;
  getAge(age: number) {
    console.log(this.age);
  }
  constructor() {}
}

let user1 = new newUser();
user1;

export { User };
