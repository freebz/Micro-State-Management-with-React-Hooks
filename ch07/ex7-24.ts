let nextId = 0;

const useStore = create<StoreState>((set) => ({
  todos: [],
  addTodo: (title) =>
    set((prev) => ({
      todos: [
        ...prev.todos,
        { id: ++nextId, title, done: false },
      ],
    })),
  removeTodo: (id) =>
    set((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id) =>
    set((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } :
          todo
      ),
    })),
}));