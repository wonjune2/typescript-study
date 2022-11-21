interface User {
  name: string;
  age: number;
}

let user1: User = {
  name: "영희",
  age: 20,
};

type User2 = {
  name: string;
  age: number;
};

let user2 = {} as User;
user2.name = "철수";
user2.age = 20;

interface AddNumber {
  (x: number, y: number): number;
}

let addNumber: AddNumber = (x, y) => {
  return x + y;
};

addNumber(10, 10);

interface User {
  name: string;
  age: number;
}

function getAge(obj: User) {
  console.log(obj.age);
}

let person = {
  name: "철수",
  age: 20,
  gender: "male",
};

getAge(person);

interface User3 {
  name: string;
  age: number;
  gender?: "male" | "female";
}

function getAge2(obj: User3) {
  console.log(obj.name);
  console.log(obj.age);
}

let person3 = {
  name: "철수",
  age: 20,
};
getAge(person3);

export { User2 };
