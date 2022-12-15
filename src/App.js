import React from "react";
import Header from "./Composants/Container/Header/Header";
import Player from "./Composants/Container/Player/Player";
import Routine from "./Composants/Container/Routine/Routine";
import User from "./Composants/Container/User/User";

function App() {

  let userFromDB = {
    nom:"John",
    prenom:"Doe",
    hobbies:["Programmation", "Graphisme", "Musique"],
    avatarURL:"https://www.djemai-samy.com/Hero/Image_samy_djemai.svg",
    age:27
  }

  function afficheAlert(){
    alert('Je suis cliqué!')
  }

	return (
		<div>
			<Header />
			<User utilisateur={userFromDB} />
			<Player user={userFromDB} />

      <button onClick={ afficheAlert }>Valider</button>

      <Routine />
		</div>
	);
}

export default App;
