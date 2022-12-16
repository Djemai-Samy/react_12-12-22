import { useContext } from "react";
import { UtilisateurContext } from "../../../App";
import Avatar from "../../UI/Avatar/Avatar";
export default function Player() {
	
  const user = useContext(UtilisateurContext);
  
  const jeu = 250;
	const score = getRandomInt();

	const nom = user.nom;
	const prenom = user.prenom;
	const age = 27;
	const isPermis = false;

	function getRandomInt() {
		return Math.floor(Math.random() * 500);
	}
	return (
		<>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{width:"40px"}}>
        <Avatar source={user.avatarURL}/>
      </div>
      
      <p style={{color:"white", margin:"auto 15px"}}>
				{nom} {prenom}
			</p>
    </div>
			

			<p>{age >= 18 ? "Majeur" : "Mineur"}</p>

			<p>{isPermis && age >= 18 ? "Peut conduire" : "ne peut pas conduire"}</p>

			<p style={{ color: score > jeu ? "green" : "red" }}>
				{score > jeu ? "Gagnant" : "Perdant"}: {score}
			</p>
		</>
	);
}

