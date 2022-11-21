interface User {
  name: string;
}

interface User {
  age: number;
}

export { User };

interface UserInfo extends User {
  gender: string;
}

let person: UserInfo = {
  name: "철수",
  age: 20,
  gender: "s남",
};

type unionType = {
  asd: string | number;
};

interface UserInfo2 extends unionType, User {
  age: number;
}

type Input = { name: string };
type Output = { age: string };
type NamedVariable = (Input | Output) & { name: string };

type Res = {
  test: string | number;
};

interface testInterface extends NamedVariable {}
