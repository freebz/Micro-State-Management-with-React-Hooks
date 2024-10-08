type State = {
  counter: {
    value: number;
  };
  counterActions: {
    increment: () => void;
    decrement: () => void;
    incrementByAmount: (amount: number) => void;
  };
};