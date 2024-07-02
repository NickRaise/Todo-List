import React from "react";

const Task = ({task}) => {
    
  return (
    <div className="todo-item flex">
      <div className="text">{task}</div>
      <div className="buttons">
        <button
          onClick={handleEdit}
          className="bg-custom-btn-light hover:bg-custom-nav-color p-2 py-1 text-white mx-1 rounded-md text-sm font-bold"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-custom-btn-light hover:bg-custom-nav-color p-2 py-1 text-white mx-1 rounded-md text-sm font-bold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
