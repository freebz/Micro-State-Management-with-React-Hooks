const TimerView = ({ timer }: { timer: typeof myTimer }) => {
  const snap = useSnapshot(timer);
  return (
    <button onClick={() => timer.reset()}>
      Seconds passed: {snap.secondsPassed}
    </button>
  );
};