import "./index.css";
import ContentImageCard from "./components/ContentImageCard";
import IntroHeader from "./components/IntroHeader";
import IntroHighlights from "./components/IntroHighlights";
import PageNavHeader from "./components/PageNavHeader";
import DealCard from "./components/DealCard";

import volumeImg from "@/assets/volume.png";
import monospaceImg from "@/assets/monospace.png";
import monospaceIcon from "@/assets/monospace-icon.svg";
import geminiImage from "@/assets/gemini-4k.png";
import weatherImage from "@/assets/weather.png";
import FAQStuff from "./components/FAQStuff";
import Footer from "./components/Footer";
import DisclaimerBanner from "./components/DisclaimerBanner";

export function App() {
  return (
    <>
      <DisclaimerBanner />

      {/* <section className="limited-width-big"> */}
      <PageNavHeader />
      {/* </section> */}

      <section
        className="limited-width-big"
        style={{
          paddingTop: 0,
        }}
      >
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
            Keep.
          </p>
          <p>
            Pairing your Pixel devices and smart home devices to the Pixel Base
            makes it the best place to navigate your digital life.
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
            Stay ahead of the curve. Access Google's next-gen AI code agents in
            preview, plus get 10 more workspaces to set up projects in.
          </p>
        </DealCard>
      </section>

      <section className="limited-width-big">
        <h2 className="section-title">
          Experience <span className="gemini-text">Gemini</span> in a whole new
          way
        </h2>
        <div className="image-highlights">
          <div className="highlight gemini-highlight">
            <p>
              Focus on your core work. Pixel Base manages the rest.
              <br />
              <span className="cheater-linebreak-styles">
                Be one of the first to experience Project Mariner on Desktop.
                Let Pixel Base automate your system tasks.
              </span>
            </p>
            <img src={geminiImage} alt="" />
          </div>
        </div>
      </section>

      <section className="limited-width">
        <h2 className="section-title">The cutting edge of AI.</h2>
        <ContentImageCard
          src={weatherImage}
          alt={"Pixel Base LEDs show contextual information when useful"}
          imageFirst={true}
        >
          <h3 className="card-title">Smart tips for every moment</h3>
          <p>
            Pixel Sense uses products across Google to highlight what's
            important to you right when you need it and makes acting on is
            seamless. Pixel Sense uses Gemini to reason and bring you
            intelligent suggestions.
          </p>
        </ContentImageCard>
      </section>

      <section className="limited-width">
        <FAQStuff />
      </section>

      <section className="limited-width">
        <Footer />
      </section>
    </>
  );
}

export default App;
