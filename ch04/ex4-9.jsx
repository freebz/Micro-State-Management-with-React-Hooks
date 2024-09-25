let count = 0;

const Component1 = () => {
  const [state, setState] = useState(count);
  const inc = () => {
    count += 1;
    setState(count);
  }

  return (
    <div>{state} <button onClick={inc}>+1</button></div>
  );
};