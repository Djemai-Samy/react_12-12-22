import React from "react";
import Counter from "./Composants/Container/Counter/Counter";
import Header from "./Composants/Container/Header/Header";
import Player from "./Composants/Container/Player/Player";
import Routine from "./Composants/Container/Routine/Routine";
import User from "./Composants/Container/User/User";
import Menu from "./Composants/Container/Menu/Menu";
import Button from "./Composants/UI/Button/Button";

function App() {
	let userFromDB = {
		nom: "John",
		prenom: "Doe",
		hobbies: ["Programmation", "Graphisme", "Musique"],
		avatarURL: "https://www.djemai-samy.com/Hero/Image_samy_djemai.svg",
		age: 27,
	};

	return (
		<div>
			<Counter />
			<Header />
			<User utilisateur={userFromDB} />
			<Player user={userFromDB} />
			<Routine />
			
      <Menu>
				<div>
					<h2>Menu secret</h2>
					<ul>
						<li>Programmation</li>
						<li>graphisme</li>
					</ul>
				</div>
			</Menu>
      
      <Menu>
				<div id="test">
					<h2>Un autre menu secret</h2>
				</div>
			</Menu>

		</div>
	);
}

export default App;
