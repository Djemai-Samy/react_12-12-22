import React, { useContext } from "react";
import { UtilisateurContext } from "../../../App";

export default function Avatar() {
  const {avatarURL} = useContext(UtilisateurContext)
	return (
		<img
			style={{ borderRadius: "50%", border: "2px solid gray", width:"100%" }}
			src={avatarURL}
			alt="Djemai Samy"
		/>
	);
}
