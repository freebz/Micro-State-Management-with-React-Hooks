const Component1 = () => {
  // useGlobalCountState는 가상의 훅이다
  const [count, setCount] = useGlobalCountState();
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count
      </button>
    </div>
  );
};

const Parent = () => {
  return (
    <>
      <Component1 />
    </>
  );
};

const GrandParent = () => {
  return (
    <>
      <Parent />
    </>
  );
};

const GrandParent = () => {
  return (
    <>
      <Parent />
    </>
  );
};

const Root = () => {
  return (
    <>
      <GrandParent />
    </>
  );
};