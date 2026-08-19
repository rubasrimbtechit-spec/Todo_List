function TaskItem({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo
}) {

  return (
    <div
      className={`task-item ${
        todo.completed ? "task-completed" : ""
      }`}
    >

      <div className="task-main">

        <button
          className={`check-button ${
            todo.completed ? "checked" : ""
          }`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? "✓" : ""}
        </button>

        <div className="task-content">

          <h3>{todo.text}</h3>

          <span>
            {todo.completed
              ? "Completed"
              : "In progress"}
          </span>

        </div>

      </div>

      <div className="task-actions">

        <button
          className="edit-button"
          onClick={() => editTodo(todo.id)}
          title="Edit task"
        >
          ✏️
        </button>

        <button
          className="delete-button"
          onClick={() => deleteTodo(todo.id)}
          title="Delete task"
        >
          🗑️
        </button>

      </div>

    </div>
  );
}

export default TaskItem;