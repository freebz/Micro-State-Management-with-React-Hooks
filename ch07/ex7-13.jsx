const Component = () => {
  const [{ count }] = useStore(
    (state) => [{ count: state.count }]
  );
  return <div>count: {count}</div>;
};