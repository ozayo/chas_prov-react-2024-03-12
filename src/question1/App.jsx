// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import React, { useState } from "react";

const App = () => {
  const [hobbies, setHobbies] = useState(['Coding', 'Playing guitar', 'Mountain bike']);
  const [newHobby, setNewHobby] = useState('');

  const handleAddHobby = () => {
    if (newHobby) {
      setHobbies([...hobbies, newHobby]);
      setNewHobby('');
    }
  };

  const handleRemoveHobby = (index) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
      />
      <button onClick={handleAddHobby}>Add new</button>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
            <button onClick={() => handleRemoveHobby(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;