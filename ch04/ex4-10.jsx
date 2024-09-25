const Component2 = () => {
  const [state, setState] = useState(count);
  const inc2 = () => {
    count += 2;
    setState(count);
  }

  return (
    <div>{state} <button onClick={inc2}>+2</button></div>
  );
};