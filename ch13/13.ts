function helloGeneric<T>(message: T): T {
  return message;
}
console.log(helloGeneric("Hey"));

function helloGerneric2<T>(message: T): T {
  return message;
}

helloGerneric2<string>("Hey");
// helloGerneric2<string>(39);

function helloGeneric3<T, U>(message: T, comment: U): T {
  return message;
}

// helloGeneric3<string>("Hey");
// helloGeneric3(36);

helloGeneric3<string, number>("Hey", 12);
helloGeneric3(21, 31);

export { helloGeneric };
