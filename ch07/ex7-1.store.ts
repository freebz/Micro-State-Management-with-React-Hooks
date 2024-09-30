// 모듈 상태와 불변 상태 이해하기

// store.ts
import create from "zustand";

export const store = create(() => ({ count: 0 }));