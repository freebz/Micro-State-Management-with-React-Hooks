// 선택자 함수 사용

const Component = () => {
  const value = useSelector((state) => state.b.c);
  return <>{value}</>;
};