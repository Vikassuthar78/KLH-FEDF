const TaskList = ({ tasks, deleteTask, editTask, toggleTask }) => {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>No tasks available.</p>;
  }

  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0, width: "100%", maxWidth: "500px" }}>
        {tasks.map((task) => (    //Rendering tasks list
          <li
            key={task.id}
            style={{
              backgroundColor: "#d8dfe6ff",
              marginBottom: "20px",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "1.2em" }}>{task.title}</h3>
              <span           
              >
                {task.completed ? "Completed ✅" : "Pending "}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "15px", gap: "8px" }}>
              <button
                onClick={() => toggleTask(task.id)} // ✅ TOGGLE BUTTON
                style={{
                         backgroundColor: task.completed ? "#ffc107" : "#28a745",
                                  }}
              >
                {task.completed ? "Mark as Pending" : "Mark as Done"}
              </button>

              <button
                onClick={() => {
                  const newTitle = prompt("Edit task:", task.title);
                  if(newTitle) 
                    editTask(task.id, newTitle);
                }}
                
              >
                ✏️ Edit
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;