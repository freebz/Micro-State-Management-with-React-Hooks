const selectTodos = (state: StoreState) => state.todos;

const TodoList = () => {
  const todos = useStore(selectTodos);
  return (
    <div>
      {todos.map((todo) => (
        <MemoedTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};