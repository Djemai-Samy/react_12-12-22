import FirstName from "../../UI/FirstName/FirstName";
import LastName from "../../UI/LastName/LastName";

export default function FullName({firstName, lastName}){
 
  return(
    <div >
      <FirstName prenom={firstName}/>
      <LastName nom={lastName}/>
    </div>
  )
}