export default function Hobbies(props) {
	return (
		<ul>
			{props.hobbies.map((elemnt, position) => {
				return <li key={position}>{elemnt}</li>;
			})}
		</ul>
	);
}

//['programmation',"Graphisme"] => [<li>programmation</li>, <li>Graphisme</li>]
