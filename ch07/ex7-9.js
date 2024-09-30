store.subscribe(() => {
  console.log("store state is changed");
});
store.setState({ count: 3 });