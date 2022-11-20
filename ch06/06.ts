const student1: object = {};
const student2 = {};

let student: {
  name: string;
  grade: number;
};

student = {
  name: "학생",
  grade: 14,
};

const student3 = {
  name: "김머사",
  grade: 14,
};

const cat: { type: string; age?: number } = {
  type: "Person",
};

cat.age = 2;

const student4: { [key: number]: number } = {};

student4[0] = 13245;
student4[1] = 123123;

console.log(student4[0]);

export { student1 };
