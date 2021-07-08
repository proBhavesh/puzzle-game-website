import React from "react";
import styles from "./lightstyle.module.css";

const LightBlueBtn = (props) => {
	return (
		<>
			<div className={styles.mainDiv}>
				<button className={styles.btn}>
					<div className={styles.svga}>
						<div className={styles.svgs}></div>
					</div>
					<div className={styles.text}>{props.text}</div>
				</button>
			</div>
		</>
	);
};

export default LightBlueBtn;
