import { useState } from "react";

import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Complete React assignment",
      completed: false
    },

    {
      id: 2,
      text: "Learn Node.js basics",
      completed: true
    },

    {
      id: 3,
      text: "Practice JavaScript",
      completed: false
    }
  ]);


  const [filter, setFilter] = useState("all");


  // ADD TASK
  const addTodo = (text) => {

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos([
      ...todos,
      newTodo
    ]);
  };


  // DELETE TASK
  const deleteTodo = (id) => {

    setTodos(
      todos.filter(
        (todo) => todo.id !== id
      )
    );
  };


  // COMPLETE TASK
  const toggleTodo = (id) => {

    setTodos(
      todos.map((todo) => {

        if (todo.id === id) {

          return {
            ...todo,
            completed: !todo.completed
          };

        }

        return todo;

      })
    );
  };


  // EDIT TASK
  const editTodo = (id) => {

    const todo = todos.find(
      (todo) => todo.id === id
    );

    const newText = prompt(
      "Edit your task:",
      todo.text
    );


    if (
      newText === null ||
      newText.trim() === ""
    ) {
      return;
    }


    setTodos(

      todos.map((todo) => {

        if (todo.id === id) {

          return {
            ...todo,
            text: newText
          };

        }

        return todo;

      })

    );
  };


  return (

    <div className="app">

      <div className="container">

        <Header />

        <Stats todos={todos} />


        <section className="task-section">

          <div className="section-heading">

            <div>
              <h1>My Tasks</h1>

              <p>
                Keep track of everything you need to accomplish.
              </p>
            </div>

          </div>


          <TaskForm
            addTodo={addTodo}
          />


          <div className="filter-bar">

            <button
              className={
                filter === "all"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => setFilter("all")}
            >
              All
            </button>


            <button
              className={
                filter === "active"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => setFilter("active")}
            >
              Active
            </button>


            <button
              className={
                filter === "completed"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>

          </div>


          <TaskList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            filter={filter}
          />

        </section>


        <footer>

          <span>
            TaskFlow
          </span>

          <span>
            Stay focused. Keep building. 🚀
          </span>

        </footer>

      </div>

    </div>
  );
}

export default App;