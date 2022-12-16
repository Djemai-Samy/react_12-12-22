//rfc: React Functional Component

import React, { useState } from 'react'
import Button from '../../UI/Button/Button'

export default function FullNameForm() {

  //Des variables pour stocker la saisie
  const [nameInput, setNameInput] = useState("Samy")
  
  //les fonctions handle, gestionnaire d'événements de saisies
  function handleNameInput(e){
    setNameInput(e.target.value)
  }

  //Fonction pour valider le formulaire
  function afficheNom(){
    //Afficher une alerte avec le nom
    alert(nameInput)
    setNameInput('')
  }

  //les composants: les inputs, boutons...
  return (
    <div>
      <input value={nameInput} type={"text"} placeholder="Entrez un nom" onChange={handleNameInput}/>
      <Button title={"Valider"} color="green" fonction={afficheNom} />
    </div>
  )
}

// Surveiller la saisie de l'utilisateur: evenement: onChange DONE

// Trouver un moyen d'acceder la valeur tapée: L'objet event recu en parametre DONE

// Stocker la valeur dans un variable: note: useState DONE

// D'utiliser l'arte en affichant la variable DONE
