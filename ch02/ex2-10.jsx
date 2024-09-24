const AdditionalInfo = () => {
  return <p>Some information</p>
};

const Component1 = ({ count, setCount, additionalInfo }) => {
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1 )}>
        Increment Count
      </button>
      {additionalInfo}
    </div>
  );
};

const Parent = ({ additionalInfo }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Component1
        count={count}
        setCount={setCount}
        additionalInfo={additionalInfo}
      />
      <Component2 count={count} setCount={setCount} />
    </>
  );
};

const GrandParent = () => {
  return <Parent additionalInfo={<AdditionalInfo />} />
};