const identity = (x) => x;

const PersonComponent = () => {
  const person = useStoreSelector(store, identity);
  return <>{person.firstName} {person.lastName}</>;
};