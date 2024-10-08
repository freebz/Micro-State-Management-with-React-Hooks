const myTimer = proxy({
  secondsPassed: 0,
  increase: () => {
    myTimer.secondsPassed += 1;
  },
  reset: () => {
    myTimer.secondsPassed = 0;
  },
});