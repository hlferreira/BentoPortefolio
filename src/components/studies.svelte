<script>
  import Image from "./image/image.svelte";
  import src from "../../public/images/ist-logo.png";
  import image from "../../public/images/icons/school-white.png";

  export let row;
  export let col;
  export let rowSize;
  export let colSize;

  $: element = undefined;
  let hovered = false;
</script>

<a
  class="container"
  href="https://tecnico.ulisboa.pt/pt/"
  style="--col:{col}; --row:{row}; --rowSize:{rowSize}; --colSize:{colSize}"
  class:animate={!element}
  on:mouseover={() => {
    hovered = true;
  }}
  on:mouseleave={() => {
    hovered = false;
  }}
  on:focus={() => {}}
  bind:this={element}
>
  <Image {image} {hovered} />
  <img {src} alt="Instituto Superior Técnico" />
  <div class="school">
    <div class="school-big">IST</div>
    <div class="school-tiny">Instituto Superior Técnico</div>
  </div>
</a>

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
    margin-right: 5pt;
    margin-bottom: 5pt;

    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }

  .container.animate {
    transform: translate(-250pt, -250pt);
  }

  img {
    width: 30%;
    height: auto;
  }

  .school {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 70%;
  }

  .school-big {
    font-size: 20pt;
    font-weight: 400;
  }

  .school-tiny {
    font-size: 8pt;
    font-weight: 100;
  }
</style>
