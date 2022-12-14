import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
   <App />
);

function MonComposantEstUneFonction(proprietes){
  return(<p>je suis un composant {proprietes.leTexte}</p>)
}
