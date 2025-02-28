import "./styles.css";
import frontView from "@/assets/yellow-front.png";

export default function IntroHeader() {
	return (
		<div className="intro-header">
			<div className="copy-area">
				<h2 className="display-text">Now you're playing with power.</h2>
				<div>
					<p className="price">From $599</p>
					<p className="financing">or $49.91/month with 12-month financing*</p>
				</div>
				<div>
					<button type="button">Buy</button>
				</div>
			</div>
			<div className="product-image">
				<img src={frontView} alt="Pixel Base Front View" />
			</div>
		</div>
	);
}
