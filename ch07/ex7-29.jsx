// 이 접근 방식과 라이브러리의 장단점

const countObj = { value: 0 };

const Component = () => {
  const [count, setCount] = useState(countObj);
  const handleClick = () => {
    setCount(countObj);
  };
  useEffect(() => {
    console.log("component updated");
  });
  return (
    <>
      {count.value}
      <button onClick={handleClick}>Update</button>
    </>
  );
};