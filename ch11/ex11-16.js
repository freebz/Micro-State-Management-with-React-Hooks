const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => get(textState).length,
});