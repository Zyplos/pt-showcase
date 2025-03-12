import ImageChip from "../ImageChip";

import gsaImage from "@/assets/gsa-original.png";
import gsaMiniImage from "@/assets/gsa-mini.png";
import mk14ServerImage from "@/assets/mk14.jpg";
import timerRenderImage from "@/assets/timer-unused.png";
import thisGuyImage from "@/assets/you.png";

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
          The "Pixel Base" is a small form factor desktop computer running
          Fuchsia OS. It has reasonable I/O plus and SD Card slot, which I added
          as a consideration incase it would hypothetically instead run Android.
        </p>

        <p>
          It has a metal chassis which makes for a premium look and feel. This
          was mostly a Blender learning experience as I tried to make the
          materials look somewhat realistically looking. I don't actually know
          if you can get metal to look like that but I think the colors are
          pretty based on what I was going for (see the previous section of the
          design notes).
        </p>

        <p>
          The front fabric part is inspired by the Google Nest speakers. The LED
          Matrix is really what made me think of this whole idea in the first
          place and draws inspiration from old Google products (again, see the
          previous section).
        </p>

        <p>
          The back of the main unit and the bottom of the keyboard have a smooth
          metal finish as an accent to the brushed metal as a callback to Google
          Pixelbook (which in turn also makes it a callback to the early Pixel
          smartphone duotone backs). I didn't put it up front and center since
          the reflective material isn't as subtle as with those other products
          but I still think the effect looked good enough to include. Having the
          whole thing be the same metal finish seemed boring.
        </p>

        <p>The I/O icons are, of course, from Material Symbols.</p>

        <p>
          The name is something I'm not totally 100% on. It's the kind of thing
          you'd spend a ton of time thinking about (I only did this in a week or
          so). I had been calling this the "Google Pixeltop" in reference to the
          Google Pixelbook, but that never sat right with me as I was working on
          it. "Google Pixel Desktop" sounded too long. Both didn't really roll
          of the tongue.
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
          its supposed to do: be the main useful thing in your house (personal
          computer, smart home hub, smartphone connectivity, a lot of
          interconnectivity with the main devices people use).
        </p>

        <p>
          <i>
            One suggestion Gemini included was "Google Workspace PC" which I
            like a lot. Sounds like it would fit in some enterprise thing. I
            think a hypothetical red colorway would fit it.
          </i>
        </p>
      </section>

      <section>
        <p className="section-title">Renders</p>

        <p>
          I forget where I read this, but one of the guidelines Google has for
          product photography is showcasing stuff in a natural environment. I
          wanted to make all the assets myself, meaning I would have to make
          everything that would go into making a realistic scene. That would've
          taken me a while since I'm not exactly a Blender expert (and rendering
          takes a good chunk of time on my computer). Doing this would've taken
          too long to finish this project.
        </p>

        <p>
          Although my Pixel 8 Pro takes wonderful pictures, I don't have the
          photography skills to frame a scene and do some CGI magic to get a
          mockup done. But please note I kept this rule in mind...
        </p>
      </section>

      <section>
        <p className="section-title">LED Matrix</p>

        <p>
          The front LED Matrix was the main catalyst for putting the work into
          finishing this concept. I really wanted to see it done since I think
          it looks pretty! I like to think it does an excellent job calling back
          to what I was referencing.
        </p>

        <p>
          I would like to credit{" "}
          <a
            href="https://twitter.com/peggdraws/media"
            target="_blank"
            rel="noreferrer"
          >
            <ImageChip src={thisGuyImage} alt="" underlineOnHover={true}>
              this guy
            </ImageChip>
          </a>{" "}
          with helping make some of the LED Matrix patterns. He does good work!
        </p>

        <p>
          Apart from just being a reference to something, the LED Matrix is
          meant to be dynamic and is meant to respond to events. For example,
          when you get a notification it'll light up with an icon. When asking
          Gemini something it'll show the LED pattern that Google Nest speakers
          show. There's a few renders on this page showing this functionality.
        </p>

        <figure>
          <img
            src={timerRenderImage}
            alt="A yellow Pixel Base unit showing a Timer on the front LED Matrix"
          />

          <figcaption>
            An unused render showing a timer on the LED Matrix.
          </figcaption>
        </figure>

        <p>
          Users should also be able to customize it and draw whatever pattern
          they'd like to show when the unit is idle.
        </p>

        <p>
          <i>
            For the idle state, I had the Nintendo Wii's CD Slot in mind, which
            doubled as a light bar that would light up when the user got
            notifications from WiiConnect24. I was going for a similar vibe
            here.
          </i>
        </p>
      </section>

      <section>
        <p className="section-title">Keyboard & Mouse</p>
        <p>
          I was originally only going to make the Pixel Base unit, but the
          renders looked at bit empty. I wanted more variety, so I added a
          keyboard and mouse for a more complete set.
        </p>

        <p>
          I wanted to make something I would use myself, so the keyboard is
          based off of my Corsair K100. Most included keyboards are low profile
          and not clicky, which I suppose most people seem to want, so I
          included it here.
        </p>

        <p>
          The caps lock and num lock indicator also double has a volume control.
          I meant for it to be a capacitive touch sort of thing (I saw{" "}
          <a
            href="https://muilab.com/en/products_and_services/muiboard/"
            target="_blank"
            rel="noreferrer"
          >
            this
          </a>{" "}
          and thought maybe it would be possible).
        </p>

        <p>
          The Google Pixelbook had a system key on the left but I moved it to
          the right since I feel like its not often used by most people. Some
          Chromebook keyboards don't have one at all, so this seemed fine.
        </p>

        <p>
          As for the mouse, the mouse I didn't make, credits go to{" "}
          <a
            href="https://sketchfab.com/3d-models/mouse-logitech-g203-6b70ace291c44735bed3309b05f44bba"
            target="_blank"
            rel="noreferrer"
          >
            JorgeAlfredOwO
          </a>{" "}
          for the mouse model.
        </p>

        <p>
          Something I cut from the site was a highlight of the mouse and how the
          charging port is on the back, not the bottom. I didn't know where to
          put that highlight but I knew it would be a widely appreciated detail.
        </p>
      </section>

      <section>
        <p className="section-title">Software</p>
        <p>
          Although one of the main points of this product is that it runs
          Fuchsia, exploring specifics of the software side of things was out of
          the scope of the project. Though I did come up with some ideas on what
          people would find helpful to have:
        </p>
        <ul>
          <li>
            scam detection from the Pixel phones but for desktop. kind of like a
            beefed up version of what Chrome has
          </li>
          <li>
            a Google Lens/Circle to Search UI kind of thing that instead summons
            Gemini for extra context like adding something to your calendar from
            information on the screen. system wide so it works in any program.
            uses Gemini Nano to do this locally
          </li>
          <li>
            basically this should include all the special Pixel features people
            like, the best of Pixel here for desktop
          </li>
          <li>acting as a Matter hub so its the center of your smart home</li>
          <li>
            Gemini being able to intelligently sort files based on descriptions,
            something useful to do with the filesystem
          </li>
          <li>
            One of the original goals for Fuchsia for it to be able to run
            Flutter projects, this should do that too
          </li>
          <li>
            The FAQ section towards the bottom of the page has some details on
            cloud connectivity
          </li>
        </ul>
      </section>

      <section>
        <p className="section-title">AI</p>

        <p>
          I don't think this one's my strongest visual here, but I really like
          the perspective of the camera for this render. The text graphics on
          the sides could be improved, but I wasn't quite sure what else to put.
        </p>

        <p>
          With this being a first party platform, this seemed like an excellent
          place to test a desktop version of{" "}
          <a
            href="https://deepmind.google/technologies/project-mariner/"
            target="_blank"
            rel="noreferrer"
          >
            Project Mariner
          </a>
          . I think there could be some interesting interactions to explore when
          having access to multiple desktop applications.
        </p>

        <p>
          One of the AI features the Pixel Base has is the upcoming Pixel Sense
          feature for Pixel phones. If it turns out to be like a super souped up
          version of At a Glance, I think that would be extremely useful to have
          here, especially if its able to hook into other 3rd party programs.
        </p>

        <p>
          Ideally the Pixel Sense section would've showed the LED Matrix
          animating from the Assistant pattern to something like a cloudy icon
          when asked about the weather, but I wanted to spend a maximum of two
          weeks on this project and that would've added some time.
        </p>
      </section>
    </>
  );
}
