import { useState, useEffect } from "react";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

const App = () => {
  
  const [tasks, setTasks] = useState([]);
  

  // Load tasks from JSON file (simulating fetch from backend)
 useEffect(() => {
    fetch("/task.json")  //fetch() is a built-in JavaScript function to make HTTP requests.returns Promise
    .then((res) => {
      console.log("Fetch response:", res);
      if (!res.ok) throw new Error("Failed to fetch tasks.json");
      return res.json();  //return array of JSON
    })
    .then((data) => {
      console.log("Loaded tasks from JSON:", data);
      setTasks(data);   //storing into react state
    })
    .catch((err) => console.error("Error loading tasks:", err));
}, []);

 // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks updated in localStorage:", tasks);
  }, [tasks]);

  //  Create
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);  //Spread operator (...tasks) takes all existing tasks from the current array (tasks),Then adds newTask at the end.
  };

  //  Update (toggle completion)
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //  Update (edit task title)
  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  //  Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1> Task Manager</h1>
      <TaskForm addTask={addTask} />

      {tasks.length === 0 ? (
        <p>No tasks available. Add one!</p>
      ) : (
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      )}
    </div>
  );
};

export default App;