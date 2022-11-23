interface Book {
  title?: string;
  description?: string;
  author?: string;
  publisher?: string;
}

let typescript: Partial<Book> = {
  title: "알잘딱깔센 TypeScript",
  description: "타입스크립트 입문자가 읽으면 좋은 책",
};

interface Book2 {
  readonly title: string;
  readonly description: string;
  readonly author?: string;
  readonly publisher?: string;
}

let typescript2: Readonly<Book> = {
  title: "알잘딱깔센 TypeScript",
  description: "타입스크립트 입문자가 읽으면 좋은 책",
};
// typescript2.title = "Type";

const food: Record<
  "1팀" | "2팀" | "3팀" | "4팀",
  "피자" | "치킨" | "햄버거" | "컵라면"
> = {
  "1팀": "피자",
  "2팀": "치킨",
  "3팀": "햄버거",
  "4팀": "컵라면",
};

type team = "1팀" | "2팀" | "3팀" | "4팀";
type Food = "피자" | "치킨" | "햄버거" | "컵라면";

const food2: Record<team, Food> = {
  "1팀": "피자",
  "2팀": "치킨",
  "3팀": "햄버거",
  "4팀": "컵라면",
};

const kim: Pick<Person, "name" | "age"> = {
  name: "Kim",
  age: 27,
};

interface Person {
  name: string;
  age: number;
  location: string;
  gender: "M" | "W";
}

type Kim = Pick<Person, "name" | "age">;

const Kim: Kim = {
  name: "Kim",
  age: 27,
};

const kim2: Kim = {
  name: "Kim",
  age: 27,
};

const kim3: Omit<Person, "age" | "gender"> = {
  name: "Kim",
  location: "Jeju",
};

type kim4 = Omit<Person, "age" | "gender">;

const kim5: kim4 = {
  name: "kim",
  location: "Jeju",
};

type T1 = NonNullable<string | number | boolean | null | undefined>;

export { food };
