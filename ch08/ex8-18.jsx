const selectFullName = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
});

const PersonComponent = () => {
  const person = useStoreSelector(store, selectFullName);
  return <>{person.firstName} {person.lastName}</>;
};