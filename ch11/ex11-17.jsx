const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};