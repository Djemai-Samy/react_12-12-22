//Un composant / A Component

export default function Button(properties) {
	return (
		<button
			style={{
				backgroundColor: properties.color,
				color: "white",
				border: "none",
				padding: "10px",
				borderRadius: "5px",
			}}
		>
			{properties.label}
		</button>
	);
}

export function ButtonOutline(props){
  return (
		<button
			style={{
				backgroundColor: "transparent",
				color: props.color,
				border: "1px solid "+props.color,
				padding: "10px",
				borderRadius: "5px",
			}}
		>
			{props.label}
		</button>
	);
}
