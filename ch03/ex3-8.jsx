const App = () => {
  const [count, setCount] = useState(0);
  return (
    <CountStateContext.Provider
      value={{ count, setCount }}
    >
      <Parent />
    </CountStateContext.Provider>
  );
};