type User = {
  name: string;
  age: number;
};

function getUser(user: User) {}

let newUser: User = {
  name: "철수",
  age: 20,
};

getUser(newUser);

type AddNumber = (x: number, y: number) => number;
let addNumber: AddNumber = (x, y) => {
  return x + y;
};

export { User };
