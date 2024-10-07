const TodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const removeTodo = useCallback((id: string) => setTodos(
    (prev) => prev.filter((item) => item.id !== id)
  ), [setTodos]);

  const toggleTodo = useCallback((id: string) => setTodos(
    (prev) => prev.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    )
  ), [setTodos]);

  return (
    <div>
      {todos.map((todo) => (
        <MemoedTodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};