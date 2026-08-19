import TaskItem from "./TaskItem";

function TaskList({
  todos,
  deleteTodo,
  toggleTodo,
  editTodo,
  filter
}) {

  const filteredTodos = todos.filter((todo) => {

    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });


  if (filteredTodos.length === 0) {

    return (
      <div className="empty-state">

        <div className="empty-icon">
          ✨
        </div>

        <h3>No tasks here!</h3>

        <p>
          Add something new and start making progress.
        </p>

      </div>
    );
  }


  return (
    <div className="task-list">

      {filteredTodos.map((todo) => (

        <TaskItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />

      ))}

    </div>
  );
}

export default TaskList;