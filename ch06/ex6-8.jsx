// 속성 접근 감지

const Component = () => {
  const trackedState = useTrackedState();
  return <p>{trackedState.b.c}</p>;
};