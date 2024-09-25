const Component2 = () => {
  const [state, setState] = useState(count);

  useEffect(() => {
    setStateFunctions.add(setState);
    return () => { setStateFunctions.delete(setState); };
  }, []);

  const inc2 = () => {
    count += 2;
    setStateFunctions.forEach((fn) => {
      fn(count);
    });
  }

  return (
    <div>{state} <button onClick={inc2}>+2</button></div>
  );
};