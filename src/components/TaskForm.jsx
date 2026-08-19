import { useState } from "react";

function TaskForm({ addTodo }) {

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    addTodo(task);

    setTask("");
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >

      <div className="input-wrapper">

        <span className="search-icon">✦</span>

        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

      </div>

      <button className="add-btn">
        + Add Task
      </button>

    </form>
  );
}

export default TaskForm;