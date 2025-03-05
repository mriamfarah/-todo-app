import React, { useState } from "react";

function TaskItem({ task, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);
  const [updatedDesc, setUpdatedDesc] = useState(task.description);

  const toggleComplete = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
    }
  };

  const handleEdit = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, name: updatedName, description: updatedDesc } : t
      )
    );
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedDesc}
            onChange={(e) => setUpdatedDesc(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={toggleComplete}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
