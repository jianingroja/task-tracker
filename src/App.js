import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "make candle",
      day: "Jan 25th",
      reminder: true,
    },
    {
      id: 2,
      text: "sheshapes meeting",
      day: "Jan 23th",
      reminder: true,
    },
    {
      id: 3,
      text: "eat marshala",
      day: "Jan 24th",
      reminder: false,
    },
  ]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1; // could cause 2 same id

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
}

export default App;
