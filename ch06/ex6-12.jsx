// 아톰 사용

const globalState = {
  a: atom(1),
  b: atom(2),
  c: atom(3),
};

const Component = () => {
  const value = useAtom(globalState.a);
  return <>{value}</>;
};