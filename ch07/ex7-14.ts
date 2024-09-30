// 읽기 상태와 갱신 상태 사용하기

type StoreState = {
  count1: number;
  count2: number;
};

const useStore = create<StoreState>(() => ({
  count1: 0,
  count2: 0,
}));