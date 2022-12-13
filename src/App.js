import "./App.css";
import React from "react";
import Button, { ButtonOutline } from "./Composants/UI/Button/Button";


function App() {
	let nom = "Djemai!";

  function Composant(){
    return(<div><h1>Hello</h1></div>)
  }

	return (
		<div>
			<h1>{nom}</h1>
			<p>Hello</p>
			<p>la suite</p>
      {Composant()}

      <Button color="blue" label="Valider" />
      <ButtonOutline color="blue" label="Valider" />
		</div>
	);
}

export default App;
