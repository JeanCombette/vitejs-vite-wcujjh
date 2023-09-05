import './main.css';
// React – c'est l'API qui permettra de gérer les composants.
// Cette ligne importe la bibliothèque React, qui est utilisée pour créer et gérer des composants dans une application web construite avec React.
// Inutile depuis la dernière version de React.
import React from 'react';

// React DOM – c’est l'API qui est responsable de générer les composants dans le DOM.
// Cette ligne importe la partie de la bibliothèque React appelée ReactDOM, qui est responsable de la manipulation du DOM (Document Object Model) pour afficher les composants React dans une application web.
import ReactDOM from 'react-dom/client';

// Cette ligne récupère l'élément HTML avec l'ID "root". Cet élément est l'endroit où le composant React sera affiché dans le DOM de la page web. Le contenu du composant sera inséré à l'intérieur de cet élément.
const rootElement = document.getElementById('root');

// Ici, une racine React est créée en utilisant la méthode createRoot. Une racine React est nécessaire pour les nouvelles versions de React (depuis la version 18) et elle remplace l'utilisation précédente de ReactDOM.render.
const root = ReactDOM.createRoot(rootElement);

// Cette ligne effectue le rendu du composant dans la racine React créée précédemment. Le composant est ici défini en utilisant du JSX (JavaScript XML), une extension de syntaxe qui permet d'écrire des éléments React de manière similaire à du HTML. Dans ce cas, le composant est simplement un élément <h1> contenant le texte "C'est du jsx".
const maCarte = (
  <main className="maClasse">
    <h1> HEDY LAMMARR's TODOS</h1>
    <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="" />

    <ul>
      <li>tic</li>
      <li>tac</li>
      <li>tic</li>
    </ul>
  </main>
);

function Profil() {
  return (
    <main className="maClasse">
      <h1> HEDY LAMMARR's TODOS</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="" />

      <ul>
        <li>tic</li>
        <li>tac</li>
        <li>tic</li>
        <Tic />

      </ul>
    </main>
  );
}
function Tic() {
  return <button className="tic"> tic et tac</button>;
}

function App() {
  return <> <Profil /> </>;
}




function Banner() {
  const title ="jungle"
  const carre=function(x){return x+x}
  return <h1>{carre(2)}</h1>
}
function Pannier() {
  const mon = 8;
  const lie = 3;
  const fle = 5^5;
  return <>

  <ul>
    <li>mon: {mon}</li>
    <li>lie: {lie}</li>
    <li>fle: {fle}</li>
  </ul>
  <p>total {mon + lie * fle}</p>
  </>
}

function User({name, avatar, age, favoriteFood}) {
  return (
    <section>
      <p>blblabla {name}</p>
      <img src="ggg" alt="">
  )
}


root.render(
  <>
    <Profil />
    <Tic />
    <Banner />
    <Pannier />

    <App />

  </>
);
