const TodoList = () => {
  const { todos } = useSnapshot(state);
  return (
    <div>
      {todos.map((todo) => (
        <MemoedTodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          done={todo.done}
        />
      ))}
    </div>
  );
};