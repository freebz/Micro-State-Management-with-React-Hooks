// useReducer와 함께 React Tracked 사용하기

const useValue = () => {
  type State = { count: number, text: string };
  type Action =
    | { type: "INC" }
    | { type: "SET_TEXT"; text: string };
  
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      if (action.type === "INC") {
        return { ...state, count: state.count + 1 };
      }
      if (action.type === "SET_TEXT") {
        return { ...state, text: action.text };
      }
      throw new Error("unknown action type");
    },
    { count: 0, text: "hello" }
  );

  useEffect(() => {
    console.log("latest state", state);
  }, [state]);

  return [state, dispatch] as const;
};