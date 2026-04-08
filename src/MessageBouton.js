import { useState } from 'react';

const MessageBouton = () => {
  const [texteAffiche, setTexteAffiche] = useState("Appuyez sur ce bouton svp");

  return (
    <article>
      <p>{texteAffiche}</p>
      <button onClick={() => setTexteAffiche("Action confirmée, merci !")}>
        Déclencher l'action
      </button>
    </article>
  );
};

export default MessageBouton;