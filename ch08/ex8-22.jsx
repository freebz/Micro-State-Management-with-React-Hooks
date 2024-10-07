const Total = () => {
  const [total] = useAtom(totalAtom);
  return <>{total}</>;
};