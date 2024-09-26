const useSelector = <S extends unknown>(
  selector: (state: State) => S
) => {
  const store = useContext(StoreContext);

  return useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => selector(store.getState()),
        subscribe: store.subscribe,
      }),
      [store, selector]
    )
  );
};