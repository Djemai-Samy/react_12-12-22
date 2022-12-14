import Button from "../../UI/Button/Button";

export default function Header(){
  return(
    <header>
      <h1>Bienvenue sur notre site!</h1>
      <img id="image-header" src="/images/ImageHeader.png" alt="Ordinateur avec new dedans" />
      <Button title="Valider" color="black" />
    </header>
  )
}