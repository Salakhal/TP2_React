import { useState } from 'react';

const Compteur = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>📊 Statistique</h3>
      <p>Total des interactions : <strong>{count}</strong></p>
      <button onClick={() => setCount(c => c + 1)}>Incrémenter la donnée</button>
    </>
  );
};

export default Compteur;