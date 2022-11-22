let text: string | number = 22;
text = "22";

interface Ujin {
  name: string;
  age: number;
}

interface Dabin {
  name: string;
  character: string;
}

// function combine(person: Ujin | Dabin) {
//     person.name;
//     person.age;
//     person.character;
// }

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

class Ujin2 {}
class Dabin2 {}

interface Cat {
  meow(): string;
}

interface Dog {
  bowwow(): string;
}

function checkType(pet: Cat | Dog) {
  if ("meow" in pet) {
    (pet as Cat).meow();
  } else {
    (pet as Dog).bowwow();
  }
}

function nullCheck(val: number | null): number {
  if (val != null) {
    return val;
  } else {
    return 0;
  }
}
