export const useStore = create<State>((set) => ({
  counter: { value: 0 },
  counterActions: {
    increment: () =>
      set((state) => ({
        counter: { value: state.counter.value + 1 },
      })),
    decrement: () =>
      set((state) => ({
        counter: { value: state.counter.value - 1 },
      })),
    incrementByAmount: (amount: number) =>
      set((state) => ({
        counter: { value: state.counter.value + amount },
      })),
  },
}));