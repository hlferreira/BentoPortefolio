<script>
  import Anex from "./anex/anex.svelte";
  import Cv from "./cv.svelte";
  import Phone from "./contacts/phone.svelte";
  import Contacts from "./contacts/contacts.svelte";
  import Experience from "./experience.svelte";
  import Based from "./based.svelte";
  import Hobbies from "./hobbies.svelte";
  import Projects from "./projects.svelte";
  import Age from "./age.svelte";
  import Studies from "./studies.svelte";
  import Technologies from "./technologies.svelte";
  import Profilepic from "./profilepic.svelte";
  import Language from "./language/language.svelte";

  import github from "../../public/images/github-mark.png";
  import gmail from "../../public/images/gmail-icon.svg";
  import linkedin from "../../public/images/LI-In-Bug.png";
  import portugal from "../../public/images/flag-of-portugal.svg";
  import uk from "../../public/images/flag-uk.png";
  import gym from "../../public/images/gym.png";
  import photo from "../../public/images/photography.png";
  import blender from "../../public/images/blender.png";
  import chess from "../../public/images/chess.png";
  import school from "../../public/images/icons/school.png";

  import thesis from "../../public/thesis.pdf";
</script>

<div class="grid">
  <Profilepic row="1" col="1" rowSize="3" colSize="7" />
  <Age row="1" col="13" rowSize="1" colSize="3" />
  <Based row="1" col="8" rowSize="1" colSize="5" />
  <Studies row="2" col="8" rowSize="3" colSize="3" />
  <Projects row="5" col="4" rowSize="7" colSize="10" />

  <Contacts
    row="4"
    col="4"
    image={linkedin}
    href={"https://www.linkedin.com/in/hlferreira/"}
  />
  <Contacts
    row="4"
    col="5"
    image={gmail}
    href={"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZQqxqbBpNDQkTHmrbWlxVtzkggvCBShJTqSGkhVbPcshZPfFhRTnsDhKqRMzzsbSzQTL"}
  />
  <Contacts
    row="4"
    col="6"
    image={github}
    href={"https://github.com/hlferreira"}
  />

  <Cv row="4" col="7" rowSize="1" colSize="1" />

  <Phone row="12" col="6" rowSize="1" colSize="5" />

  <Hobbies
    row="9"
    col="1"
    rowSize="1"
    colSize="3"
    image={gym}
    text={"Gym"}
    delay={50}
  />
  <Hobbies
    row="10"
    col="1"
    rowSize="1"
    colSize="3"
    image={photo}
    text={"Photography"}
    delay={100}
  />
  <Hobbies
    row="11"
    col="1"
    rowSize="1"
    colSize="3"
    image={blender}
    text={"3D Modulation"}
    delay={150}
  />
  <Hobbies
    row="12"
    col="1"
    rowSize="1"
    colSize="3"
    image={chess}
    text={"Chess"}
    delay={200}
    href={"https://www.chess.com/member/hlferreira"}
  />

  <Technologies row="4" col="1" rowSize="5" colSize="3" />
  <Experience row="2" col="11" rowSize="3" colSize="5" delay="150" />

  <Anex
    row="5"
    col="14"
    rowSize="1"
    colSize="2"
    image={school}
    href={thesis}
    delay={50}
    text={"Thesis"}
  />
  <Language
    row="12"
    col="4"
    rowSize="1"
    colSize="2"
    image={portugal}
    country="Portuguese"
    skill="Native"
  />
  <Language
    row="12"
    col="11"
    rowSize="1"
    colSize="2"
    image={uk}
    country="English"
    skill="Fluent"
  />
</div>

<style>
  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(12, 1fr);
    border-radius: 15pt;
    width: 60vw;
    height: 75vh;
  }
</style>
