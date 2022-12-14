// export default function Player() {

//   const score = 600;

//   if(score > 500){

//     return (
//       <div>Gagnant: {score}</div>
//     )
//   }else{

//     return (
//       <div>Perdant: {score}</div>
//     )
//   }

// }

//Opérateur ternaire:
// (condition) ? (expression executée si vrai) : (expression execiutée si faux)

// export default function Player() {
// 	const score = 600;
// 	return (
// 		<div style={{ color: score > 500 ? "green" : "red" }}>
// 			{score > 500 ? "Gagnant" : "Perdant"}: {score}
// 		</div>
// 	);
// }

export default function Player() {
	const jeu = 250;
	const score = getRandomInt();

	const nom = "Djemai";
	const prenom = "Samy";
	const age = 27;
	const isPermis = false;

	function getRandomInt() {
		return Math.floor(Math.random() * 500);
	}

	return (
		<>
			<p>
				Joueur: {nom} {prenom}
			</p>

			<p>{age >= 18 ? "Majeur" : "Mineur"}</p>

			<p>{isPermis && age >= 18 ? "Peut conduire" : "ne peut pas conduire"}</p>

			<p style={{ color: score > jeu ? "green" : "red" }}>
				{score > jeu ? "Gagnant" : "Perdant"}: {score}
			</p>
		</>
	);
}

