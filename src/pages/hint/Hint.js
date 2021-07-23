import React from "react";
import { NavLink as Link } from "react-router-dom";
import styles from "./style.module.css";
import { FiHelpCircle } from "react-icons/fi";
import ReactangleDesign from "../../components/reactangle_design/ReactangleDesign";
import LightBlueBtn from "../../components/buttons/LightBlueBtn.js";
import DarkBlueBtn from "../../components/buttons/DarkBlueBtn.js";
import Footer from "../../components/footer/Footer.js";

const Home = () => {
	return (
		<>
			<div className={styles.mainDiv}>
				<div className={styles.sideDesign}>
					<ReactangleDesign />
				</div>
				<section className={styles.mainSec}></section>
				<div className={styles.helpDiv}>
					Need Help
					<FiHelpCircle size={20} />
				</div>
				{/*<Footer />*/}
			</div>
		</>
	);
};

export default Home;
