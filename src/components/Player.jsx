import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <li className={ isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={name} onChange={handleChange} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
