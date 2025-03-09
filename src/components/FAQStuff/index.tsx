import "./styles.css";

export default function FAQStuff() {
  return (
    <div className="faq-section">
      <div className="title-section">
        <h2>Frequently asked questions.</h2>
      </div>
      <div className="content-section">
        <details name="faq">
          <summary>What is this?</summary>
          <p>
            This is a concept for a hypothetical future desktop platform by
            Google.
          </p>
          <p>
            Please note this isn't made in any official capacity or anything,
            I'm not a Googler. Just something I thought up and wanted to make.
            All renders by me! Except for the mouse model. Credits go to{" "}
            <a
              href="https://sketchfab.com/3d-models/mouse-logitech-g203-6b70ace291c44735bed3309b05f44bba"
              target="_blank"
              rel="noreferrer"
            >
              JorgeAlfredOwO
            </a>{" "}
            for the model.
          </p>
          <p>
            There are extra notes if you{" "}
            <strong>toggle the design commentary</strong> at the top.
          </p>
        </details>
        <details name="faq">
          <summary>Where can I buy this?</summary>
          <p>Sadly you cannot buy this. As it does not exist. Sorry!</p>
        </details>
        <details name="faq">
          <summary>
            Why's this running Fuchsia and not ChromeOS or Android?
          </summary>
          <p>
            <i>
              This is my own opinion based on news and rumors and my own
              knowledge about Google.
            </i>
          </p>
          <p>
            I heard Google is moving away from ChromeOS to Android, so ChromeOS
            wouldn't make sense to have in some hypothetically future official
            desktop platform.
          </p>
          <p>
            Launching this with Android may make sense, but in my opinion I
            wouldn't do it, at least with Android's current developer landscape.
            The apps that are out there only support an equivalent experience to
            what a Chromebook would give you (at that point, why even make this
            thing in that case?).
          </p>
          <p>
            The tablet market (and TV market) that Android currently serves
            would not serve a desktop well (consider the{" "}
            <a
              href="https://www.youtube.com/watch?v=3S5BLs51yDQ"
              target="_blank"
              rel="noreferrer"
            >
              is the iPad a computer?
            </a>{" "}
            discourse).
          </p>
          <p>
            <i>
              To drive home the point: visionOS is essentially iPadOS. If the
              iPad is a computer, then why is visionOS's most popular feature
              mirroring another computer?
            </i>
          </p>
          <p>
            That's not what I'd like this machine to be. So unless developer
            relations gets better so desktop class software gets built, Android
            would not go on this machine either.
          </p>
          <p>
            Fuchsia was still figuring out what it wanted to be before it was
            cut back. I like to think if it had more time it would've developed
            into a serious desktop OS contender (along with its mobile
            ambitions, making for great integrations).
          </p>
          <p>
            This project was made in 2025 with the hypothetical release date of
            2027, though this would definitely need more development time if it
            were to exist. With Microsoft leaving so much of the market behind
            with Windows 10, there's an opportunity here to compete...
          </p>
        </details>

        <details name="faq">
          <summary>Why is this using the Google Tensor G6?</summary>
          <p>
            This is based on a story I read about user feedback to the Tensor
            chips where people were complaining about overheating issues. I
            picked the Tensor G6 since the story mentioned that it was the
            target for shipping an improved Tensor chip.
          </p>

          <p>
            Realistically this hypothetical product would ship way later than
            when the Tensor G6 Pixel phones would come out though (given
            development time for everything involved).
          </p>
        </details>

        <details name="faq">
          <summary>
            How does the Pixel Base connect to Google Workspace PCs?
          </summary>
          <p>
            "Google Workspace PCs" don't really exist (though in some manner{" "}
            <a
              href="https://cloud.google.com/solutions/virtual-desktops?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              they do
            </a>
            ). Really I just added that section on a whim because the page was
            looking a bit empty. But I did give it some thought:
          </p>
          <p>
            Microsoft recently released the Windows 365 Link, a device who's
            sole purpose is to connect to a cloud PC and make it look like
            you're using a PC locally.
          </p>
          <p>
            It reminded me of{" "}
            <a
              href="https://www.pingthread.com/thread/1196557401710837762"
              target="_blank"
              rel="noreferrer"
            >
              this story about Sun Microsystems
            </a>
            .
          </p>
          <p>
            I think the Windows 365 Link is a bit silly. I suppose I'm not the
            target audience for it.
          </p>
          <p>
            In a Fuchsia-powered reality, I think a good option would be making
            mounted cloud storage a very seamless experience. Like Google Drive
            for Desktop but with the backing of a first party platform. Paired
            with the Sun Microsystems story and depending on how Fuchsia would
            end up working, I think it would make for a better virtual desktop
            experience than streaming video.
          </p>
          <p>
            With Google Cloud having this resources that it does I thought maybe
            this seemed like a plausible enough thing to include and yet another
            thing that would integrate well.
          </p>
          <p>
            <i>
              Side thought: Google Stadia was actually quite good at streaming
              video and did its job well. Streamline it a bit more for virtual
              desktops and that might be a good experience instead of building
              out what Sun Microsystems architected.
            </i>
          </p>
        </details>
        <details name="faq">
          <summary>Why's there a Micro SD Card slot in the back?</summary>
          <p>
            Should this hypothetical product come to market, it would probably
            be running Android if Google is shifting away from ChromeOS (see the
            second message in the FAQ). Android supports extra storage with an
            SD Card, but you hardly see that feature being used now a days. May
            as well put it in this, people would find it useful.
          </p>
          <p>
            I couldn't decide between a normal sized SD Card or Micro SD Card. I
            only went with the Micro SD Card because I thought of the Steam
            Deck, which is basically a small form factor computer that uses a
            Micro SD Card as one of its main storage mediums (so maybe it would
            work fine here).
          </p>
        </details>
      </div>
    </div>
  );
}
