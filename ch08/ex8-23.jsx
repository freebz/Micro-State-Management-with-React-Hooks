const App = () => (
  <>
    (<Counter countAtom={count1Atom} />)
    +
    (<Counter countAtom={count2Atom} />)
    =
    <Total />
  </>
);