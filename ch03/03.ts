// let a = true;
// let b = "hello";
// let c = 1;
// let d = {};

// let name: string = "원준";

// export { a, b, c, d, name };

// let a: any = 0;
// a = true;
// a = "typescript";
// a = {};

// const neverTest = () => {
//   while (true) {
//     console.log("함수가 실행중입니다.");
//   }
// };

// let a: string | number;

type Centimeter = number;
type Kilogram = number;

type Student = {
  name?: string;
  height: Centimeter;
  weight: Kilogram;
};

let student: Student = {
  name: "joon",
  height: 155,
  weight: 56,
};

let student2: Student = {
  height: 164,
  weight: 56,
};
