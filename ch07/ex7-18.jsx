const Total = () => {
  const count1 = useStore(selectCount1);
  const count2 = useStore(selectCount2);
  return (
    <div>
      total: {count1 + count2}
    </div>
  );
};