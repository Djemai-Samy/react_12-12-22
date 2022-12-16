import React, { useState } from "react";
import Button from "../../UI/Button/Button";

export default function LoginForm() {
	//1 Créer les variables d'états
	let [user, setUser] = useState({ name: "", email: "", password: "" });

	function handleInput(e, nameInput) {
		//nameInput: "email", "password", "name"
    setUser({...user, [nameInput]: e.target.value})
	}

	//3 La fonction pour valider le formulaire
	function login() {
		//Envoyer les donnée a la back end, apres verification des entrées
		alert(`Email: ${user.email}. Username: ${user.name}`);
	}

  console.log(user);

	//Lier les composant avec lesvariables et les fonction
	return (
		<div>
			<input
				type={"text"}
				placeholder="Entrez votre nom"
				value={user.name}
				onChange={(event)=>{ handleInput(event, "name") }}
			/>
			<input
				type={"email"}
				placeholder="Entrez votre email"
				value={user.email}
				onChange={(event)=>{ handleInput(event, "email") }}
			/>
			<input
				type="password"
				placeholder="Mot de passe"
				value={user.password}
				onChange={(event)=>{ handleInput(event, "password") }}
			/>
			<Button title="Login" color="black" fonction={login} />
		</div>
	);
}

