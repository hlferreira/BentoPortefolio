<script>
  import Image from "./image/image.svelte";
  import sky from "../../public/images/sky.png";
  import android from "../../public/images/android.png";
  import chromecast from "../../public/images/chromecast.png";

  import image from "../../public/images/icons/computer.png";

  export let row;
  export let col;
  export let rowSize;
  export let colSize;
  export let delay;

  let hovered = false;
  $: element = undefined;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="container"
  style="--col:{col}; --row:{row}; --rowSize:{rowSize}; --colSize:{colSize}; --delay:{delay}ms"
  on:mouseover={() => {
    hovered = true;
  }}
  on:mouseleave={() => {
    hovered = false;
  }}
  on:focus={() => {}}
  class:animate={!element}
  bind:this={element}
>
  <Image {image} {hovered} />

  <div class="info">
    <img class="sky" src={sky} alt="Sky" />
    <div class="job-description">
      <div>Front-End Developer</div>
      <div class="time">
        <div>February 2022</div>
        <div>-</div>
        <div>Currently</div>
      </div>
      <div class="tech-wrapper">
        <img class="tech" src={chromecast} alt="Chromecast" />
        <img class="tech" src={android} alt="Android" />
      </div>
    </div>
  </div>
  <div class="description">
    Helped develop the
    <b>
      <a href="https://peacocktv.com">Peacock</a>
    </b>,
    <b><a href="https://skyshowtime.com">SkyShowtime</a></b> and
    <b><a href="https://showmax.com">Showmax</a></b>
    web applications for Chromecast devices using
    <b
      ><a href={"https://developers.google.com/cast/docs/web_receiver"}>CAF</a
      ></b
    >
    framework.
    <br />
    Looking to learn, I switched to Android development, whilst still working on
    the same applications.
  </div>
</div>

<style>
  a {
    text-decoration: none;
    color: black;
  }
  .container {
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);
    background-color: white;
    padding: 10pt;
    border-radius: 10pt;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 5pt;
    margin-bottom: 5pt;
    position: relative;
    box-sizing: border-box;
    transition-delay: var(--delay);
  }

  .container.animate {
    transform: translate(550pt);
  }

  .info {
    position: relative;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
  }

  .job-description {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .sky {
    height: 125%;
    width: auto;
  }

  .description,
  .time {
    font-weight: 100;
    font-size: 8pt;
  }

  .time {
    display: flex;
    justify-content: flex-end;
  }

  .time > * {
    margin: 0pt 2pt;
  }

  .tech-wrapper {
    text-align: end;
  }

  .tech {
    width: 8%;
  }

  .tech:nth-child(n - 1) {
    margin-left: -5pt;
  }
</style>
