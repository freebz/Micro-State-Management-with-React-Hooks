const selectFirstName = (state) => state.firstName;
const selectLastName = (state) => state.lastName;

const PersonComponent = () => {
  const firstName = useStoreSelector(store, selectFirstName);
  const lastName = useStoreSelector(store, selectLastName);
  return <>{firstName} {lastName}</>;
};