const useCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count is changed to', count);
  }, [count]);

  return [count, setCount];
};