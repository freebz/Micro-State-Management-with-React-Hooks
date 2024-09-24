// 언제 전역 상태를 사용할까?

// prop을 전달하는 것이 적절하지 않을 때

const Component1 = ({ count, setCount }) => {
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count
      </button>
    </div>
  );
};

const Parent = ({ count, setCount }) => {
  return (
    <>
      <Component1 count={count} setCount={setCount} />
    </>
  );
};

const GrandParent = ({ count, setCount }) => {
  return (
    <>
      <Parent count={count} setCount={setCount} />
    </>
  );
};

const Root = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <GrandParent count={count} setCount={setCount} />
    </>
  );
};