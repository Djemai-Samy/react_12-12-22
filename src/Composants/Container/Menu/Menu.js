import React, { useState } from "react";
import Button from "../../UI/Button/Button";

export default function Menu(props) {

  console.log(props);
	const [isShow, setIsShow] = useState(false);
	
  function toggleShow(){
  
   setIsShow(!isShow);
   //setIsShow(isShow ? false : true)
  }
  
  return (
		<div>
      <Button id="test" title={isShow ? "hide" : "show"} color={isShow ? 'red': 'green'} fonction={toggleShow}/>
			{isShow ? (props.children) : null}
		</div>
	);
}

//Une variable de type bool, Note: Utiliser un useState: DONE

//Afficher ou cacher le menu suivant la variable: Note: les conditions : Opérateur ternaire. DONE

//Un bouton qui execute une fonction: Afficher ou cacher le menu: Changer la variable de true a false ou de false a true DONE
