import { useState } from "react";

const TaskForm = ({ addTask }) => {     
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;