const Component = () => {
  const count = useStore((state) => state.count);
  return <div>count: {count}</div>;
};