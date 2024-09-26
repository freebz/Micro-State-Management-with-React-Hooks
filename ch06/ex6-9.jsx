const Component = () => {
  const trackedState = useTrackedState();
  return (
    <>
      <p>{trackedState.b.c}</p>
      <p>{trackedState.e.g}</p>
    </>
  );
};