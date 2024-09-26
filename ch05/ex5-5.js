// 컨텍스트 사용이 필요한 시점

const ThemeContext = createContext("light");

const Component = () => {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>
};