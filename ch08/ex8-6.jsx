const TextContext = createContext();

const TextProvider = ({ children }) => (
  <TextContext.Provider value={useState("")}>
    {children}
  </TextContext.Provider>
);

const App = () => (
  <TextContext>
    ...
  </TextContext>
);