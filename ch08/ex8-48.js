// 아톰의 onMount 옵션 이해하기

const countAtom = atom(0);
countAtom.onMount = (setCount) => {
  console.log("count atom 사용을 시작합니다");
  const onUnmount = () => {
    console.log("count atom 사용이 끝났습니다");
  };
  return onUnmount;
};