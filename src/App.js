import React from "react";
import Header from "./Composants/Container/Header/Header";
import Player from "./Composants/Container/Player/Player";
import User from "./Composants/Container/User/User";

function App() {

  let userFormDB = {
    nom:"Djemai",
    prenom:"Samy",
    hobbies:["Programmation", "Graphisme"]
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
