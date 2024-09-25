let count = 0;
const setStateFunctions = new Set<(count: number) => void>();

const Component1 = () => {
  const [state, setState] = useState(count);

  useEffect(() => {
    setStateFunctions.add(setState);
    return () => { setStateFunctions.delete(setState); };
  }, []);

  const inc = () => {
    count += 1;
    setStateFunctions.forEach((fn) => {
      fn(count);
    });
  }

  return (
    <div>{state} <button onClick={inc}>+1</button></div>
  );
};