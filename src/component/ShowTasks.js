import React from "react";
import "./showTaskStyle.css";
export default function ShowTasks(props) {
  const { tasks, setTasks, setTaskInput, setIdItem, setMood } = props;
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, id) => id !== index));
  };
  const handleUpdate = (index) => {
    const updateTask = tasks[index];
    setTaskInput(updateTask);
    setIdItem(index);
    setMood("update");
  };
  return (
    <ul className="list-group list-group-flush mt-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span className="word-wrap text-start me-3">{task}</span>
          <div>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button
              className="btn btn-sm btn-outline-success ms-2"
              onClick={() => handleUpdate(index)}
            >
              update
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
