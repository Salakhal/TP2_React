import { useState, useEffect } from 'react';

const CompteurEffet = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.info("Mise à jour ! Le nouveau chiffre est :", index);
  }, [index]);

  return (
    <div style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
      <h4>Test du Hook d'effet</h4>
      <button onClick={() => setIndex(i => i + 1)}>
        Augmenter la valeur [{index}]
      </button>
    </div>
  );
};

export default CompteurEffet;