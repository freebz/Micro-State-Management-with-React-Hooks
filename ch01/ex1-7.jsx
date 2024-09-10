// useState 사용하기

// 값으로 상태 갱신하기

const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(1)}>
        Set Count to 1
      </button>
    </div>
  );
};