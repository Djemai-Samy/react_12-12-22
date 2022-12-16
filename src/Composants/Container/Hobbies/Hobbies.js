import { useContext } from "react";
import { UtilisateurContext } from "../../../App";

export default function Hobbies() {

  const {hobbies} = useContext(UtilisateurContext)
	return (
		<ul>
			{hobbies.map((elemnt, position) => {
				return <li key={position}>{elemnt}</li>;
			})}
		</ul>
	);
}

//['programmation',"Graphisme"] => [<li>programmation</li>, <li>Graphisme</li>]
