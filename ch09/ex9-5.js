const proxyObject = new Proxy({
  count: 0,
  text: "hello",
}, {
  set: (target, prop, value) => {
    console.log("start setting", prop);
    target[prop] = value;
    console.log("end setting", prop);
  },
});