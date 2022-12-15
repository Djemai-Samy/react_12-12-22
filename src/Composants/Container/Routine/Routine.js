import Button from "../../UI/Button/Button";

export default function Routine() {
	//Créer une fonction qui prend en parametre 'laTache' une chaine de caractères
	function afficheAlert(laTache) {
		//Et alert la concatenation de 'faut aller (laTache)!'
		alert(`Faut aller ${laTache}!`);
	}

	return (
		<div>
			<button
				onClick={() => {
					afficheAlert("manger");
				}}
			>
				Manger
			</button>

			<button
				onClick={() => {
					afficheAlert("dormir");
				}}
			>
				Dormir
			</button>

			<button
				onClick={() => {
					afficheAlert("étudier");
				}}
			>
				Etudier
			</button>

			<Button
				title="Manger"
				color="red"
				fonction={() => {
					afficheAlert("manger");
				}}
			/>
			<Button
				title="Dormir"
				color="green"
				fonction={() => {
					afficheAlert("dormir");
				}}
			/>
		</div>
	);
}
