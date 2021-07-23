import React, { Suspense } from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";

const Puzzle = React.lazy(() => import("./pages/puzzle/Puzzle"));

const Hint = React.lazy(() => import("./pages/hint/Hint"));
const App = () => {
	return (
		<>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<div className="wrapper">
							<Route path="/" exact>
								<Home />
							</Route>
							<Route path="/puzzle" exact>
								<Puzzle />
							</Route>
							<Route path="/hint" exact>
								<Hint />
							</Route>
						</div>
					</Switch>
				</Suspense>
			</Router>
		</>
	);
};

export default App;
