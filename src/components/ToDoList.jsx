import React, { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([
    "Wake Up Early",
    "Brush The Teeth",
    "Take A Bath",
  ]);
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
        <h1>FOCUS.</h1>
        <p>3 LEFT</p>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="What's your next focus?..."
          value={newItem}
          onChange={handleInputChange}
        />
        <button className="add-btn">+</button>
      </div>
      <ol>
        {items.map((task, index) => (
          <li key={index}>
            <span className="task">{task}</span>
            <div className="actions">
              <button className="mark-btn">⭕</button>
              <button className="del-btn">🗑️</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
