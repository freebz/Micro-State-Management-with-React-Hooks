const Counter1 = () => {
  const { count1 } = useContext(CountContext);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      Count1: {count1} (renders: {renderCount.current})
    </div>
  );
};

const MemoCounter1 = memo(Counter1);