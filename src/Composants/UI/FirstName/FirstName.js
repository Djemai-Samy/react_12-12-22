import { useContext } from "react"
import { UtilisateurContext } from "../../../App"
import classes from "./FirstName.module.css"
export default function FirstName() {
  
  const user = useContext(UtilisateurContext);

  
  return (
    <span className={classes.text}>{user.prenom}</span>
  )
}
