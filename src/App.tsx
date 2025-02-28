import IntroHeader from "./components/IntroHeader";
import PageNavHeader from "./components/PageNavHeader";
import "./index.css";

export function App() {
	return (
		<>
			<section className="limited-width">
				<PageNavHeader />
			</section>

			<section className="limited-width">
				<IntroHeader />
			</section>
		</>
	);
}

export default App;
