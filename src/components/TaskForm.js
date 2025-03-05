import React, { useState } from "react";

function TaskForm({ setTasks }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !description.trim()) {
      alert("Please fill out both fields!");
      return;
    }

    setTasks((prev) => [
      ...prev,
      { id: Date.now(), name: taskName, description, completed: false },
    ]);

    setTaskName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
