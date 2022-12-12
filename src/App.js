import "./App.css";
import React from "react";

function App() {
	let nom = "Djemai!";

	//Un composant / A Component
	function Button(properties) {
		return (
			<button
				style={{
					backgroundColor: properties.color,
					color: "white",
					border: "none",
					padding: "10px",
					borderRadius: "5px",
				}}
			>
				{properties.label}
			</button>
		);
	}

	return (
		<div>
			<h1>{nom}</h1>
			<p>Hello</p>
			<p>la suite</p>
			<Button color="green" label="Enregistrer" />
			<Button color="red" label="Valider" />
		</div>
	);
}

export default App;
