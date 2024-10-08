const CharacterCount = () => {
  const [count] = useAtom(charCountAtom);
  return <>Character Count: {count}</>;
};