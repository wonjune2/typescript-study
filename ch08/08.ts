const food: string = "banana";
// const food: string = 1

type Food = string;
const myFood: Food = "banana";
// const myFood2: Food = 1

type Name = string;
const userName: Name = "Jade";

type MyName = "Jade";
// const userNaame: MyName = "jade";

type MyNumber = number;
const myNumber: MyNumber = 1;

type MyText = string | number;

type YourText = "Hello" | " bye";

type MyNumberL = 1 | 2 | 3 | 4 | 5 | 6;

type MyObject = { first: 1 } | { second: 2 };

type MyFunction = (() => string) | (() => void);

interface A {
  a: number;
}
interface B {
  b: number;
}

type MyInterface = A | B;

type MyTuple = [string, number];

type MyGenerics<T> = {
  name: T;
};
