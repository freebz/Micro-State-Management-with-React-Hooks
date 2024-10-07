const PersonComponent = () => {
  const [person] = useAtom(personAtom);
  return <>{person.firstName} {person.lastName}</>;
};