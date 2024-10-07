const state2 = proxy({
  obj1: { c: 0 },
  obj2: { c: 0 },
});

const snap21 = snapshot(state2)

++state2.obj1.c;

const snap22 = snapshot(state2)