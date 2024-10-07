import { createContext, createElement, Dispatch, memo, ReactNode, SetStateAction, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useSubscription } from "use-subscription";
import { atom, useAtom } from "jotai";

const count1Atom = atom(0);
const count2Atom = atom(0);

const Counter = ({ countAtom }) => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return <>{count} <button onClick={inc}>+1</button></>;
};

const totalAtom = atom(
  (get) => get(count1Atom) + get(count2Atom)
);

const Total = () => {
  const [total] = useAtom(totalAtom);
  return <>{total}</>;
};

const App = () => (
  <>
    (<Counter countAtom={count1Atom} />)
    +
    (<Counter countAtom={count2Atom} />)
    =
    <Total />
  </>
);

export default App;
