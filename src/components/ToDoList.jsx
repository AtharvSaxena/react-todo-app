import React, { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState(["Aplle", "Banana"]);
  const [newItem, setNewItem] = useState("");

  function handleInputChange(event) {
    setNewItem(event.target.value);
  }

  function addItem() {}

  function deleteItem() {}

  function markItemAsComplete() {}

  return (
    <div className="to-do-list">
      <div className="header">
        <h1>To Do List App</h1>
      </div>
      <div className="content">
        <input
          type="text"
          placeholder="Enter A Task..."
          value={newItem}
          onChange={handleInputChange}
        />
        <button onClick={addItem} className="add-btn">
          Add Task
        </button>
      </div>
      <ol>
        {items.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <div className="controls">
              <button
                className="mark-complete-btn"
                onClick={markItemAsComplete}
              >
                ✔️
              </button>
              <button className="delete-btn" onClick={deleteItem}>
                ❌
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
