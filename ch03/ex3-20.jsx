const Counter2 = () => {
  const { count2 } = useContext(CountContext);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      Count2: {count2} (renders: {renderCount.current})
    </div>
  );
};

const MemoCounter2 = memo(Counter2);