import React, { createContext, useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes, NavLink} from 'react-router-dom';
import Home from "./Composants/Pages/Home";
import Login from "./Composants/Pages/Login";
import Profil from "./Composants/Pages/Profil";


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
        <Router>
          <nav>
            <ul>
              <li><NavLink to="/" >Acceuil</NavLink></li>
              <li><NavLink to="/profil" >Profil</NavLink></li>
              <li><NavLink to="/login" >Se connecter</NavLink></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profil" element={<Profil/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>     
			</UtilisateurContext.Provider>
		</div>
	);
}

export default App;
