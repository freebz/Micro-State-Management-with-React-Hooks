// useSelector와 useTrackedState의 차이점

const Component = () => {
  const isSmall = useSelector((state) => state.a < 10);
  return <>{isSmall ? 'small' : 'big'}</>;
};