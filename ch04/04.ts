let list: number[] = [1, 2, 3, 4, 5];

let member: string[] = ["김멋사", "이멋사", "박멋사"];
member.push("라이캣");

let every: any[] = ["김멋사", 10, true, null];

let union: (string | number | boolean | null)[] = ["김멋사", 10, true, null];

let str: Array<string> = ["김멋사", "이멋사"];

let gerUnion: Array<string | number> = ["김머사", 10];

let str2: typeof gerUnion = ["김멋사", 20];

let arr: Array<() => string> = [() => "라이캣", () => "김멋사"];
export { list };
