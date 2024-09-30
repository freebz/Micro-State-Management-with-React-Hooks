import { createContext, createElement, Dispatch, memo, ReactNode, SetStateAction, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useSubscription } from "use-subscription";
import create from "zustand";

const countObj = { value: 0 };

const Component = () => {
  const [count, setCount] = useState(countObj);
  const handleClick = () => {
    countObj.value += 1;
    setCount(countObj);
  };
  useEffect(() => {
    console.log("component updated");
  });
  return (
    <>
      {count.value}
      <button onClick={handleClick}>Update</button>
    </>
  );
};

const App = () => (
  <Component />
);

export default App;
