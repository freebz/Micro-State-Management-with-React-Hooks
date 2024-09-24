// 이미 리액트 외부에 상태가 있을 때

const globalState = {
  authInfo: { name: 'React' },
};

const Component1 = () => {
  // useGlobalState는 가상의 훅이다
  const { authInfo } = useGlobalState();
  return (
    <div>
      {authInfo.name}
    </div>
  );
};