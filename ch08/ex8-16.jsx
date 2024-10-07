const PersonComponent = () => {
  const [person] = useAtom(fullNameAtom);
  return <>{person.firstName} {person.lastName}</>;
};