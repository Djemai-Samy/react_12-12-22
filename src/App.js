import React, { createContext } from "react";
import Counter from "./Composants/Container/Counter/Counter";
import Header from "./Composants/Container/Header/Header";
import Player from "./Composants/Container/Player/Player";
import Routine from "./Composants/Container/Routine/Routine";
import User from "./Composants/Container/User/User";
import Menu from "./Composants/Container/Menu/Menu";
import Button from "./Composants/UI/Button/Button";
import FullName from "./Composants/Container/FullName/FullName";
import FullNameForm from "./Composants/Forms/FullNameForm/FullNameForm";
import LoginForm from "./Composants/Forms/LoginForm/LoginForm";


//1 Créer le contexte
export const UtilisateurContext = createContext();

function App() {
	let userFromDB = {
		nom: "John",
		prenom: "Doe",
		hobbies: ["Programmation", "Graphisme", "Musique"],
		avatarURL: "https://www.djemai-samy.com/Hero/Image_samy_djemai.svg",
		age: 27,
	};

  //Utiliser le Provider et le remplir
	return (
		<div> 
			<UtilisateurContext.Provider value={userFromDB}>
				<User/>
				<Player  />
				<FullNameForm />
				<LoginForm />
				<Counter />
				<Header />

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
			</UtilisateurContext.Provider>
		</div>
	);
}

export default App;
