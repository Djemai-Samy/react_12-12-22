import classes from "./FirstName.module.css"
export default function FirstName({prenom}) {
  return (
    <span className={classes.text}>{prenom}</span>
  )
}
