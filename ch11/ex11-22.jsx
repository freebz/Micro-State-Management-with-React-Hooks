const TextInput = () => {
  const [text, setText] = useAtom(textAtom);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <br />
      Echo: {text}
    </div>
  );
};