const Component = () => {
  const color = useContext(ColorContext);
  return <div style={{ color }}>Hello {color}</div>
};