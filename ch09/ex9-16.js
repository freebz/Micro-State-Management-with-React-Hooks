const contrivedState = proxy({
  num: 123,
  str: "hello",
  arr: [1, 2, 3],
  nestedObject: { foo: "bar" },
  objectArray: [{ a: 1 }, { b: 2 }],
});