//rfc: React Functional Component

import { useContext } from "react"
import { UtilisateurContext } from "../../../App"

export default function LastName() {

  const user = useContext(UtilisateurContext);
  
  return (
    <span style={ {margin:"auto 5px", fontSize:"1.2em"} }>{user.nom}</span>
  )
}
