import { useState } from 'react';

const FormulaireNom = () => {
  const [saisieUtilisateur, setSaisieUtilisateur] = useState("");

  const validerFormulaire = (e) => {
    e.preventDefault();
    alert("Bonjour " + saisieUtilisateur + ", bienvenue !");
  };

  return (
    <form onSubmit={validerFormulaire}>
      <h3>Vos informations</h3>
      <div>
        <label htmlFor="champNom">Votre prénom : </label>
        <input
          id="champNom"
          type="text"
          value={saisieUtilisateur}
          onChange={(e) => setSaisieUtilisateur(e.target.value)}
          placeholder="Ex: Youssef..."
        />
      </div>
      <button type="submit" style={{ marginTop: '8px' }}>Envoyer</button>
    </form>
  );
};

export default FormulaireNom;