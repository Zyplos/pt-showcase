import fuchsiaIcon from "@/assets/fuchsia.svg";
import tensorIcon from "@/assets/tensor.svg";
import geminiIcon from "@/assets/gemini.svg";
import devicesIcon from "@/assets/devices.svg";
import "./styles.css";

export default function IntroHighlights() {
	return (
		<div className="intro-showcase">
			<h2>Seamlessly connected. Powerfully Google.</h2>

			<div className="highlights-row">
				<div>
					<img src={fuchsiaIcon} alt="" />
					<p>Next level productivity with Fuchsia OS.</p>
				</div>

				<div>
					<img src={tensorIcon} alt="" />
					<p>Supercharge your tasks with Google Tensor G6.</p>
				</div>

				<div>
					<img src={geminiIcon} alt="" />
					<p>Smarter personal automation with Gemini.</p>
				</div>

				<div>
					<img src={devicesIcon} alt="" />
					<p>Integrates with other Pixel devices.</p>
				</div>
			</div>
		</div>
	);
}
