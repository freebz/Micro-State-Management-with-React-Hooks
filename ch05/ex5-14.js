const useSetState = () => {
  const store = useContext(StoreContext);
  return store.setState;
};