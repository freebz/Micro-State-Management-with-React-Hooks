import { createContext, createElement, Dispatch, memo, ReactNode, SetStateAction, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useSubscription } from "use-subscription";
import { atom, useAtom } from "jotai";

const firstNameAtom = atom("React");
const lastNameAtom = atom("hooks");
const ageAtom = atom(3);

const personAtom = atom((get) => ({
  firstName: get(firstNameAtom),
  lastName: get(lastNameAtom),
  age: get(ageAtom),
}));

const fullNameAtom = atom((get) => ({
  firstName: get(firstNameAtom),
  lastName: get(lastNameAtom),
}));

const PersonComponent = () => {
  const [person] = useAtom(fullNameAtom);
  return <>{person.firstName} {person.lastName}</>;
};

const App = () => (
  <PersonComponent />
);

export default App;
