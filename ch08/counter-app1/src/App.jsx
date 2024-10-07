import { createContext, createElement, Dispatch, memo, ReactNode, SetStateAction, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useSubscription } from "use-subscription";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);

const Counter1 = () => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return <>{count} <button onClick={inc}>+1</button></>;
};

const Counter2 = () => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return <>{count} <button onClick={inc}>+1</button></>;
};

const TextContext = createContext();

const TextProvider = ({ children }) => (
  <TextContext.Provider value={useState("")}>
    {children}
  </TextContext.Provider>
);

const App = () => (
  <TextProvider>
    <div><Counter1 /></div>
    <div><Counter2 /></div>
  </TextProvider>
);

export default App;
