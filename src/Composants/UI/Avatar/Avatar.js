import React from "react";

export default function Avatar({source}) {
	return (
		<img
			style={{ borderRadius: "50%", border: "2px solid gray", width:"100%" }}
			src={source}
			alt="Djemai Samy"
		/>
	);
}
