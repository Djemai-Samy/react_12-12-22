import { useState } from "react";
import Button from "../../UI/Button/Button";

// rfc: react functionnal composant
export default function Counter() {

 // Le hook: useState
  const [compteur, setCompteur] = useState(0);
  const [doubleCompteur, setDoubleCompteur] = useState(0);

  console.log("compteur dans le composant: "+compteur);
  
  function add(){
    console.log("compteur avant changement: "+compteur);
    
    let newCounter = compteur + 1
    setCompteur(newCounter);
    setDoubleCompteur(newCounter * 2);

    console.log("compteur apres changement: "+compteur);
  }

  function sub(){
    let newCounter = compteur - 1
    setCompteur(newCounter)
    setDoubleCompteur(newCounter*2)
  }


	return (
		<div>
			<p style={{ color: "white" }}>Counter: {compteur}</p>
			<p style={{ color: "white" }}>Double Counter: {doubleCompteur}</p>
      <Button color="red" title="-1" fonction={sub} />
      <Button color="green" title="+1" fonction={add} />
		</div>
	);
}

//Getter: Methodes pour acceder une propriété
//Setter: Methodes pour changer une propriété
