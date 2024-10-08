const TimerView = observer(({ timer }: { timer: Timer }) => (
  <button onClick={() => timer.reset()}>
    Seconds passed: {timer.secondsPassed}
  </button>
));