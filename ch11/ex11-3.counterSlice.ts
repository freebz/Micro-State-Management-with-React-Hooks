export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (
      state,
      action: PayloadAction<number>
        ) => {
      state.value += action.payload;
    },
  },
});