const TodoList = () => {
  const { todos } = useSnapshot(state);
  const todoIds = todos.map((todo) => todo.id);

  return (
    <div>
      {todoIds.map((todoId) => (
        <MemoedTodoItem key={todoId} id={todoId} />
      ))}
    </div>
  );
};