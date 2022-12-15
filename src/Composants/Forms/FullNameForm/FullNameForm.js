//rfc: React Functional Component

import React, { useState } from 'react'
import Button from '../../UI/Button/Button'

export default function FullNameForm() {

  const [nameInput, setNameInput] = useState("")
  
  function afficheNom(){
    //Afficher une alerte avec le nom
    alert(nameInput)
  }

  function handleNameInput(e){
    setNameInput(e.target.value)
  }
  
  return (
    <div>
      <input type={"text"} placeholder="Entrez un nom" onChange={handleNameInput}/>
      <Button title={"Valider"} color="green" fonction={afficheNom} />
    </div>
  )
}

// Surveiller la saisie de l'utilisateur: evenement: onChange DONE

// Trouver un moyen d'acceder la valeur tapée: L'objet event recu en parametre DONE

// Stocker la valeur dans un variable: note: useState DONE

// D'utiliser l'arte en affichant la variable DONE
