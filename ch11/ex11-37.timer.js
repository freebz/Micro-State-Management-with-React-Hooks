// MobX와 Valtio 예제 비교

// timer.js
const timer = proxy({ secondsPassed: 0 })

export const increase = () => {
  timer.secondsPassed += 1;
};

export const reset = () => {
  timer.secondsPassed = 0;
};

export const useSecondsPasses = () => useSnapshot(timer).secondsPassed;