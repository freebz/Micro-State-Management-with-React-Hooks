const Component = () => {
  const value = useSelector((state) => state.b.c * 2);
  return <>{value}</>;
};