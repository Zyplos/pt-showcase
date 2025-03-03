import IntroHeader from "./components/IntroHeader";
import IntroHighlights from "./components/IntroHighlights";
import PageNavHeader from "./components/PageNavHeader";
import "./index.css";

export function App() {
	return (
		<>
			<section className="limited-width-big">
				<PageNavHeader />
			</section>

			<section className="limited-width-big">
				<IntroHeader />
			</section>

			<section className="limited-width">
				<IntroHighlights />
			</section>
		</>
	);
}

export default App;
