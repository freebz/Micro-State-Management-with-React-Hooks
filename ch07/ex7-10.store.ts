// 리액트 훅을 이용한 리렌더링 최적화

// store.ts
import create from "zustand";

export const useStore = create(() => ({
  count: 0,
  text: "hello",
}));