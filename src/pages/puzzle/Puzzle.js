import React from "react";
import { NavLink as Link } from "react-router-dom";
import styles from "./style.module.css";
import { FiHelpCircle } from "react-icons/fi";
import ReactangleDesign from "../../components/reactangle_design/ReactangleDesign";
import DarkBlueBtn from "../../components/buttons/DarkBlueBtn.js";
import LightBtnWithIcon from "../../components/buttons/LightBtnWithIcon.js";
import OpaqueBtn from "../../components/buttons/OpaqueBtn.js";
import Footer from "../../components/footer/Footer.js";
import PuzzlePiece from "../../components/puzzlePiece/PuzzlePiece.js";

const Home = () => {
	return (
		<>
			<div className={styles.mainDiv}>
				<div className={styles.sideDesign}>
					<ReactangleDesign />
				</div>
				<section className={styles.mainSec}>
					{/*puzzzle info*/}
					<div className={styles.puzzleInfo}>
						<LightBtnWithIcon
							text="Here is your puzzle"
							iconName="FaRegLightbulb"
						/>
						<h1>Sincere Ocelot</h1>
						<div className={styles.opaqueBtns}>
							<OpaqueBtn text="Difficult" />
							<OpaqueBtn text="3 X 3" />	
							<OpaqueBtn text="Irregular" />
						</div>
						
					</div>
					{/*puzzle piece*/}
					<div className={styles.puzzlePiece}>
						<div>
							<PuzzlePiece />
							<PuzzlePiece />
							<PuzzlePiece />
						</div>
						<div>
							<PuzzlePiece />
							<PuzzlePiece />
							<PuzzlePiece />
						</div>
						<div>
							<PuzzlePiece />
							<PuzzlePiece />
							<PuzzlePiece />
						</div>
					</div>
					{/*choose btn*/}
					<div className={styles.chooseBtn}>
						<DarkBlueBtn text="Choose Another Puzzle" />
					</div>
				</section>
				<div className={styles.helpDiv}>
					Need Help
					<FiHelpCircle size={20} />
				</div>
				<Footer />
				{/*<Footer />*/}
			</div>
		</>
	);
};

export default Home;
