const useCount = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);

  return [count, inc];
};