type StoreState = {
  count1: number;
  count2: number;
  inc1: () => void;
  inc2: () => void;
};

const useStore = create<StoreState>((set) => ({
  count1: 0,
  count2: 0,
  inc1: () => set(
    (prev) => ({ count1: prev.count1 + 1 })
  ),
  inc2: () => set(
    (prev) => ({ count2: prev.count2 + 1 })
  ),
}));