import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  return (
    <div>
      {tasks.length === 0 ? <p>No tasks yet!</p> : null}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;
