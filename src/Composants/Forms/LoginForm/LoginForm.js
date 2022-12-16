import React, { useState } from "react";
import Button from "../../UI/Button/Button";

export default function LoginForm() {
	//1 Créer les variables d'états
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");

	//2 Les fonction handles
	function handleEmail(e) {
		setEmail(e.target.value);
	}

	function handleName(e) {
		setName(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	//3 La fonction pour valider le formulaire
	function login() {
		//Envoyer les donnée a la back end, apres verification des entrées
		alert(`Email: ${email}. Username: ${name}`);
	}

	//Lier les composant avec lesvariables et les fonction
	return (
		<div>
			<input
				type={"text"}
				placeholder="Entrez votre nom"
				value={name}
				onChange={handleName}
			/>
			<input
				type={"email"}
				placeholder="Entrez votre email"
				value={email}
				onChange={handleEmail}
			/>
			<input
				type="password"
				placeholder="Mot de passe"
				value={password}
				onChange={handlePassword}
			/>
      <Button title="Login" color="black" fonction={login} />
		</div>
	);
}
