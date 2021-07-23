import React from "react";
import styles from "./style.module.css";

const PuzzlePiece = () => {
	return (
		<>
			<div className={styles.jigsaw1}>
				<span className={styles.t}></span>
				<span className={styles.r}></span>
				<span className={styles.b}></span>
				<span className={styles.l}></span>
			</div>
		</>
	);
};

export default PuzzlePiece;
