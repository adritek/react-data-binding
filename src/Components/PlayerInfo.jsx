import { useState } from 'react';

export default function PlayerInfo({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">{playerName}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
