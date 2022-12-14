import Avatar from "../../UI/Avatar/Avatar";
import FullName from "../FullName/FullName";
import Hobbies from "../Hobbies/Hobbies";
import classes from "./User.module.css";

export default function User({utilisateur}) {
	return (
		<div className={classes.container}>
			<div className={classes.imageContainer}>
				<Avatar />
			</div>

			<div className={classes.infoContainer}>
				<FullName lastName={utilisateur.nom} firstName={utilisateur.prenom} />
				<Hobbies />
			</div>
		</div>
	);
}
