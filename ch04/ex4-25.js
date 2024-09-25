const useStoreSelector = (store, selector) => useSubscription(
  useMemo(() => ({
    getCurrentValue: () => selector(store.getState()),
    subscribe: store.subscribe,
  }), [store, selector])
);