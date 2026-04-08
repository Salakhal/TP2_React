import './App.css';
import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';

const App = () => {
  return (
    <div className="dashboard">
      <header>
        <h1>🎓 Travaux Pratiques : React Hooks</h1>
       
      </header>

      <div className="card"><Compteur /></div>
      <div className="card"><MessageBouton /></div>
      <div className="card"><FormulaireNom /></div>
      <div className="card"><CompteurEffet /></div>
    </div>
  );
}

export default App;