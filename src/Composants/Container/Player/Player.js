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
	
  const score = getRandomInt();
	const jeu = 250;
	
  function getRandomInt() {
		return Math.floor(Math.random() * 500);
	}
  
	return (
		<p style={{ color: score > jeu ? "green" : "red" }}>
			{score > jeu ? "Gagnant" : "Perdant"}: {score}
		</p>
	);

}
