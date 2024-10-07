const TodoItem = ({
  id,
  title,
  done,
}: {
  id: string;
  title: string;
  done: boolean;
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggleTodo(id)}
      />
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {title}
      </span>
      <button onClick={() => removeTodo(id)}>
        Delete
      </button>
    </div>
  );
};

const MemoedTodoItem = memo(TodoItem);