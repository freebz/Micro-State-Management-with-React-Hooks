// store.ts
import create from "zustand";

export const useStore = create(() => ({
  count: 0,
  text: "hello",
}));