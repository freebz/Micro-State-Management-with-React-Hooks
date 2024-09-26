const Component = () => {
  const isSmall = useTrackedState().a < 10;
  return <>{isSmall ? 'small' : 'big'}</>;
};