//Un composant / A Component

export default function Button(props) {

  let  test = "test"

	return (
		<button
			style={{
				backgroundColor: props.color,
			}}
		>
			{props.title}
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
