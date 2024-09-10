// 리액트 훅 사용하기

const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
};