import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Sélection de l'élément racine dans le fichier public/index.html
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Rendu de l'application avec le mode strict activé pour détecter les problèmes
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);