import "./index.css";
import ContentImageCard from "./components/ContentImageCard";
import IntroHeader from "./components/IntroHeader";
import IntroHighlights from "./components/IntroHighlights";
import PageNavHeader from "./components/PageNavHeader";
import DealCard from "./components/DealCard";

import volumeImg from "@/assets/volume.png";
import monospaceImg from "@/assets/monospace.png";
import monospaceIcon from "@/assets/monospace-icon.svg";

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

      <section className="limited-width">
        <h2 className="section-title">A workflow experience like no other.</h2>

        <ContentImageCard src={volumeImg} alt={"Slide to change volume"}>
          <h3 className="card-title">A desktop built around you</h3>
          <p>
            The Pixel Base integrates with all of Google to help you with your
            daily tasks. Always stay up to date with what's happening in your
            circles with a better ease of access to Google Calendar, Tasks, and
            Keep. Pairing your Pixel devices and smart home devices to the Pixel
            Base makes it the best place to navigate your digital life.
          </p>
        </ContentImageCard>

        <ContentImageCard
          src={monospaceImg}
          alt={"Monospace Pro"}
          imageFirst={true}
        >
          <h3 className="card-title">The next generation in computing</h3>
          <p>
            The Pixel Base can connect to cloud PCs and let you use them as if
            you were right there next to them. Connect to PCs in your Google
            Workspace for a private, secure experience tailored to your
            workflow.
          </p>
        </ContentImageCard>

        <DealCard src={monospaceIcon} href="https://idx.dev">
          <p className="card-title">Get 2 months of Monospace Pro on us</p>

          <p>
            Get the best before the rest. Access Google’s next-gen AI and
            priority access to new features with Gemini Advanced, plus get 2TB
            of storage.▽
          </p>
        </DealCard>
      </section>
    </>
  );
}

export default App;
