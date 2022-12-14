import React from "react";
import Header from "./Composants/Container/Header/Header";
import Player from "./Composants/Container/Player/Player";
import User from "./Composants/Container/User/User";

function App() {

  let userFormDB = {
    nom:"John",
    prenom:"Die",
    hobbies:["Programmation", "Graphisme", "Musique"],
    avatarURL:"https://www.djemai-samy.com/Hero/Image_samy_djemai.svg",
    age:27
  }

	return (
		<div>
			<Header />
			<User utilisateur={userFormDB} />
			<Player user={userFormDB} />
		</div>
	);
}

export default App;
