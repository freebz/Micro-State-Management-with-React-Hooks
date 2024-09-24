const App = () => {
  const [color, setColor] = useState('red');
  return (
    <ColorContext.Provider value={color}>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Parent />
    </ColorContext.Provider>
  );
};