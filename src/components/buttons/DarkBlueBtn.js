import React from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./darkstyle.module.css";

const DarkBlueBtn = (props) => {
	return (
		<>
			<div className={styles.mainDiv}>
				<button className={styles.btn}>
					<div className={styles.text}>{props.text}</div>
					<div className={styles.svga}><FiArrowRight /></div>
				</button>
			</div>
		</>
	);
};

export default DarkBlueBtn;
