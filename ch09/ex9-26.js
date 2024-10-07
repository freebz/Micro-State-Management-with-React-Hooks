// 이 접근 방식의 장단점

array.splice(index, 1)


[...array.slice(0, index), ...array.slice(index + 1)]


state.a.b.c.text = "hello";


{
  ...state,
  a: {
    ...state.a,
    b: {
      ...state.a.b,
      c: {
        ...state.a.b.c,
        text: "hello",
      },
    },
  },
}


const state = proxy({ count: 0, text: "hello" });


// Valtio
const Component = () => {
  const { count } = useSnapshot(state);
  return <>{count}</>;
};


// Zustand
const Component = () => {
  const count = useStore((state) => state.count);
  return <>{count}</>;
};


// Valtio
const Component = ({ showText }) => {
  const snap = useSnapshot(state);
  return <>{snap.count} {showText ? snap.text : ""}</>;
};


// Zustand
const Component = ({ showText }) => {
  const count = useStore((state) => state.count);
  const text = useStore(
    (state) => showText ? state.text : ""
  );

  return <>{count} {text}</>;
};