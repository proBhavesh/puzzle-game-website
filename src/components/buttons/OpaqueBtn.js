import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import styles from "./OpaqueBtn.module.css";

const LightBtnWithIcon = (props) => {
	return (
		<>
			<div className={styles.mainDiv}>
				<button className={styles.btn}>
					<div className={styles.text}>{props.text}</div>
				</button>
			</div>
		</>
	);
};

export default LightBtnWithIcon;
