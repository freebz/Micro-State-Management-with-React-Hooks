console.log(store.getState()); // ---> { count: 0 }
store.setState({ count: 1 });
console.log(store.getState()); // ---> { count: 1 }