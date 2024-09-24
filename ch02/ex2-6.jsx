// 지역 상태에 대한 useState 이해하기

const AddBase = ({ number }) => {
  const [base, changeBase] = useState(1);
  return <div>{number + base}</div>;
};