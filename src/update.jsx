import { useState } from 'react';

function Update() {
  const [name, setName] = useState('HEMA');

  return (
    <div>
      <h2>Name: {name}</h2>

      <button onClick={() => setName('LATHA')}>
        Update Name
      </button>
    </div>
  );
}

export default Update;