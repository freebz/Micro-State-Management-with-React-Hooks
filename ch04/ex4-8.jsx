// 리액트에서 전역 상태를 다루기 위한 모듈 상태 사용법

let count = 0;

const Component1 = () => {
  const inc = () => {
    count += 1;
  }

  return (
    <div>{count} <button onClick={inc}>+1</button></div>
  );
};