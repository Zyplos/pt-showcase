import gsaImage from "@/assets/gsa-original.png";
import gsaMiniImage from "@/assets/gsa-mini.png";
import mk14ServerImage from "@/assets/mk14.jpg";

export default function DesignCommentary() {
  return (
    <>
      <section>
        <p className="section-title">Design Notes</p>

        <p>
          This project is a concept for a hypothetical future desktop platform
          made by Google. I made this in early 2025. This product was made with
          a hypothetical launch date of 2027 where Fuchsia kept it's active
          development going.
        </p>

        <p>
          Originally I was just going to make the renders, but I thought
          building a mock site of the Google Store for this hypothetical product
          would be a nice touch.
        </p>

        <p>
          I made this with something in mind. Each colorway is a reference to
          something. Do you know to what? I'd be impressed if you could guess
          the first two. You'd be my favorite Googler if you can guess all
          three.
        </p>

        <p>
          <i>Hint: they're a reference to old Google products.</i>
        </p>

        <details>
          <summary>
            Cant't figure it out? Click here to spoil the answer.
          </summary>

          <p>
            The Yellow and Blue Pixel Base units are a reference to one of
            Google's old enterprise offerings: the{" "}
            <b>Google Search Appliance</b>. The blue one was also known as the
            "Google Mini."
          </p>

          <figure>
            <img src={gsaImage} alt="A yellow Google Search Appliance" />

            <figcaption>
              One of many models of the Google Search Appliance.
            </figcaption>
          </figure>

          <figure>
            <img
              src={gsaMiniImage}
              alt="A blue Google Search Appliance, also known as the Google Mini"
            />

            <figcaption>The "Google Mini". This is one I have!</figcaption>
          </figure>

          <p>
            The third Green unit is a reference to a hardware product that goes
            by a few names. Some call it "Google Radio Automation," but that's
            technically the name for the team that made this product. Googling
            for this name brings up "Google SS32" which is also the incorrect
            name for this machine, that is the name for the software the machine
            ran.
          </p>
          <p>
            This is the <b>Google MK-14</b> server, a 4U server sold to radio
            stations.
          </p>

          <figure>
            <img src={mk14ServerImage} alt="The Google MK-14 server" />

            <figcaption>
              An image of the Google MK-14 from u/Motor_Anxiety_9357 on
              r/homelab.
            </figcaption>
          </figure>
        </details>
      </section>

      <section>
        <p className="section-title">The Unit</p>

        <p>
          the back of the main unit and the bottom of the keyboard have a smooth
          metal finish as an accent to the brushed metal as a callback to
          pixelbook (which in turn also makes its it a callback to the early
          pixel smartphone duotone backs)
        </p>

        <p>
          didnt put it up front and center since the reflective material isnt as
          subtle as with those other products but i still think the effect looks
          good
        </p>

        <p>
          I have been calling this the "Google Pixeltop" in reference to the
          Pixelbook, but that never sat right with me as I was working on it.
          "Google Pixel Desktop" sounded too long.
        </p>

        <p>
          Consulting with Gemini 2.0 Pro Experimental 02-05 for suggestions gave
          me:
        </p>
        <blockquote>
          Pixel Base: Suggests a foundational element, like a base station.
        </blockquote>
        <p>
          which I liked much more than what I had. It also resonates with what
          its supposed to do: be the main thing in your house (personal
          computer, smart home hub, smartphone connectivity, a lot of
          interconnectivity with the main devices people use).
        </p>
        <p>
          One suggestion it included was "Google Workspace PC" which I like a
          lot. Sounds like it would fit in some enterprise thing. I think the
          missing red colorway would fit it.
        </p>
      </section>

      <section>
        <p className="section-title">Renders</p>
        <p>
          I forget where I read this, but one of the guidelines Google has for
          product photography is showcasing stuff in a natural environment. I
          didn't want to use any stuff not made by me, and I didn't want to
          model out an entire scene for an image or two (rendering takes a good
          chunk of time on my computer). Although my Pixel 8 Pro takes wonderful
          pictures, I don't have the photography skills to frame a scene and do
          some CGI magic to get a mockup done. But do know I kept it in mind...
          (edited)
        </p>
      </section>

      <section>
        <p className="section-title">LED Matrix</p>
        <p>
          front leds could be for something cool like notifications (referencing
          wiiconnect24 light bar)
        </p>
      </section>

      <section>
        <p className="section-title">Keyboard</p>
        <p>
          the pixelbook had a system key on the left but i moved it to the right
          since i feel like its not often used by most people
        </p>
      </section>

      <section>
        <p className="section-title">Mouse</p>
        <p>
          Something I cut from this was a highlight of the mouse and how the
          charging port is on the back, not the bottom. But I ended up not
          making the mouse myself for the sake of time.
        </p>
      </section>

      <section>
        <p className="section-title">The AI Angle</p>
        <p>
          Ideally the Gemini section would've showed the LED Matrix animating
          from the Assistant pattern to something like a cloudy icon when asked
          about the weather, but doing that was out of the scope of this
          project.
        </p>
      </section>

      <section>
        <p className="section-title">Fuchsia</p>
        <p>
          Although one of the main points of this product would be that it runs
          on Fuchsia, exploring specifics of the software side of things was out
          of the scope of the project. Though I did come up with some ideas on
          what people would find helpful to have:
        </p>
        <ul>
          <li>
            scam detection from the Pixel phones to look for phishing attempts
          </li>
          <li>Acting as a Matter hub</li>
          <li>
            a Google Lens/Circle to Search UI kind of thing that instead summons
            Gemini for extra context like adding something to your calendar from
            information on the screen
          </li>
          <li>
            Gemini being able to bulk rename files or sort files, something
            useful with the filesystem
          </li>
        </ul>
      </section>
    </>
  );
}
