const DummyComponent = () => {
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return <div>Dummy (renders: {renderCount.current})</div>;
};