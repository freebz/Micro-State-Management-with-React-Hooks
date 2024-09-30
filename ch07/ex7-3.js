const state1 = store.getState();
state1.count = 2; // 잘못됨
store.setState(state1);