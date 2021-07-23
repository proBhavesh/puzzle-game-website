import React from "react";
import { FaPuzzlePiece } from "react-icons/fa";
import styles from "./LightBtnWithIcon.module.css";

const LightBtnWithIcon = (props) => {
	return (
		<>
			<div className={styles.mainDiv}>
				<div className={styles.svga}>
					<FaPuzzlePiece size={22}/>
				</div>
				<button className={styles.btn}>
					<div className={styles.text}>{props.text}</div>
				</button>
			</div>
		</>
	);
};

export default LightBtnWithIcon;
