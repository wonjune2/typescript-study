interface User {
  readonly name: string;
}

let person: User = {
  name: "철수",
};

// person.name = 'duddml';

let Users: ReadonlyArray<string> = ["철수", "영희"];

// Users.splice(0, 1);
