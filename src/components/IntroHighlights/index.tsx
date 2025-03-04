import "./styles.css";
//
import fuchsiaIcon from "@/assets/fuchsia.svg";
import tensorIcon from "@/assets/tensor.svg";
import geminiIcon from "@/assets/gemini.svg";
import devicesIcon from "@/assets/devices.svg";
//
import deskView from "@/assets/desk-view.png";
import whale from "@/assets/whale.png";
import tensorChip from "@/assets/tensor-chip.png";

export default function IntroHighlights() {
  return (
    <div className="intro-showcase">
      <h2 className="section-title">
        Seamlessly connected. Powerfully Google.
      </h2>

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

      <div className="image-highlights">
        <div className="highlight bg-product desk-view">
          <p>All in one package for any workflow.</p>
          <img src={deskView} alt="" />
        </div>

        <div className="highlight bg-product tensor-chip">
          <p>Powerful and secured by Tensor G6.</p>
          <img src={tensorChip} alt="" />
        </div>

        <div className="highlight bg-product customize">
          <p>Playfully customizable.</p>
          <img src={whale} alt="" />
        </div>
      </div>
    </div>
  );
}
