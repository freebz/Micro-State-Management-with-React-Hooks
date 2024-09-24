// useState와 useContext 탐구하기

// useContext 없이 useState 사용하기

const App = () => {
  const [count, setCount] = useState(0);
  return <Parent count={count} setCount={setCount} />;
};