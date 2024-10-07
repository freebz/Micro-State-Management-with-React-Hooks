const textAtom = atom("");

// 컴포넌트에서는 다음과 같이 사용한다.
const [text, setText] = useAtom(textAtom);