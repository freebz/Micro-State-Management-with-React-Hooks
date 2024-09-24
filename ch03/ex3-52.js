const useMyState = (initialState = { count1: 0, count2: 0 }) => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    console.log('updated', state);
  });

  const inc1 = useCallback(() => {
    setState((prev) => ({
      ...prev,
      count1: prev.count1 + 1
    }));
  }, []);

  const inc2 = useCallback(() => {
    setState((prev) => ({
      ...prev,
      count2: prev.count2 + 1
    }));
  }, []);

  return [state, { inc1, inc2 }];
};