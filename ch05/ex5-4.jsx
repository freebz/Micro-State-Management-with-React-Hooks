const Component = () => (
  <StoreProvider>
    <Counter />
    <Counter />
  </StoreProvider>
);

const Component2 = () => (
  <Store2Provider>
    <Counter />
    <Counter />
  </Store2Provider>
);

const Component3 = () => (
  <Store3Provider>
    <Counter />
    <Counter />
  </Store3Provider>
);