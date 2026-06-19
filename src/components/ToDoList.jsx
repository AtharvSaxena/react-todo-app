import React, { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Complete React project",
      completed: false,
    },
    {
      id: 2,
      text: "Read a book",
      completed: false,
    },
    {
      id: 3,
      text: "Go for a walk",
      completed: false,
    },
  ]);

  const [completeItems, setCompleteItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  const leftTasks = items.length;

  function handleInputChange(event) {
    setNewItem(event.target.value);
  }

  function addItem() {
    if (newItem.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: newItem,
      completed: false,
    };
    setItems([...items, newTask]);
    setNewItem("");
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
    setCompleteItems(completeItems.filter((item) => item.id !== id));
  }

  function markItemAsComplete(id, text, completed) {
    if (completed) {
      setCompleteItems(completeItems.filter((item) => item.id !== id));
      const completedTask = {
        id: id,
        text: text,
        completed: false,
      };
      setItems([...items, completedTask]);
    } else {
      setItems(items.filter((item) => item.id !== id));
      const completedTask = {
        id: id,
        text: text,
        completed: true,
      };
      setCompleteItems([...completeItems, completedTask]);
    }
  }

  return (
    <div className="to-do-list">
      <div className="header">
        <h1>FOCUS.</h1>
        <p>{leftTasks} LEFT</p>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="What's your next focus?..."
          value={newItem}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addItem();
            }
          }}
        />
        <button className="add-btn" onClick={addItem}>
          +
        </button>
      </div>
      <ol>
        {items.map((task) => (
          <li key={task.id}>
            <span className="task">{task.text}</span>
            <div className="actions">
              <button
                className="mark-btn"
                onClick={() => markItemAsComplete(task.id, task.text)}
              >
                {task.completed ? (
                  <i className="fa-solid fa-check fa-xl"></i>
                ) : (
                  <i className="fa-regular fa-circle fa-2xl"></i>
                )}
              </button>
              <button className="del-btn" onClick={() => deleteItem(task.id)}>
                <i className="fa-regular fa-trash-can fa-2xl"></i>
              </button>
            </div>
          </li>
        ))}
      </ol>
      <ol>
        {completeItems.map((task) => (
          <li key={task.id} className="completed">
            <span>{task.text}</span>
            <div className="actions">
              <button
                className="mark-btn"
                onClick={() =>
                  markItemAsComplete(task.id, task.text, task.completed)
                }
              >
                {task.completed ? (
                  <i className="fa-solid fa-check fa-xl"></i>
                ) : (
                  <i className="fa-regular fa-circle fa-2xl"></i>
                )}
              </button>
              <button className="del-btn" onClick={() => deleteItem(task.id)}>
                <i className="fa-regular fa-trash-can fa-2xl"></i>
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
