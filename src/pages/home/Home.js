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
				<section className={styles.mainSec}>
					<div className={styles.head}>
						<h1>Choose The Type of Puzzle to Solve.</h1>
						<p>
							You may specify any of the following settings for
							your puzzle.
						</p>
					</div>
					<div className={styles.btns}>
						<div className={styles.cts}>
							<Link to="/puzzle">
								<h3>Click To Set</h3>
							</Link>
						</div>
						<div className={styles.btn}>
							<h3>Click To Set</h3>
							<LightBlueBtn text="Difficulty Level" />
						</div>
						<span className={styles.line}></span>
						<div className={`${styles.btn}`}>
							<h3>Click To Set</h3>
							<LightBlueBtn text="Puzzle Size" />
						</div>
						<span className={styles.line}></span>
						<div className={`${styles.btn}`}>
							<h3>Click To Set</h3>
							<LightBlueBtn text="Border Type" />
						</div>
					</div>
					<div className={styles.submit}>
						<DarkBlueBtn text="Get My Puzzle" />
					</div>
				</section>
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
