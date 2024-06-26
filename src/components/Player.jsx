import { useState } from 'react';

export default function Player() {
  const [name, setName] = useState('');
  const [displayedName, setDisplayedName] = useState('unknown entity');
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {displayedName}</h2>
      <p>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={() => setDisplayedName(name)}>Set Name</button>
      </p>
    </section>
  );
}
