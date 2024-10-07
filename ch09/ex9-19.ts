const createTodo = (title: string) => {
  state.todos.push({
    id: nanoid(),
    title,
    done: false,
  });
};

const removeTodo = (id: string) => {
  const index = state.todos.findIndex(
    (item) => item.id === id
  );
  state.todos.splice(index, 1);
};

const toggleTodo = (id: string) => {
  const index = state.todos.findIndex(
    (item) => item.id === id
  );
  state.todos[index].done = !state.todos[index].done;
};