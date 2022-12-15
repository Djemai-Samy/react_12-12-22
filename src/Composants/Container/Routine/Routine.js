
export default function Routine() {
  
  function alertManger(){
    alert("faut aller manger!")
  }

  function alertDormir(){
    alert("faut aller dormir!")
  }

  function alertEtudier(){
    alert("faut aller étudier!")
  }
  
  return (
    <div>
      <button onClick={alertManger}>Manger</button>
      <button onClick={alertDormir}>Dormir</button>
      <button onClick={alertEtudier}>Etudier</button>
    </div>
  )
}
