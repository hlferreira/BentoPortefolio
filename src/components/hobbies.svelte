<script>
  import Image from "./image/image.svelte";
  import hobby from "../../public/images/icons/hobby.png";
  export let row;
  export let col;
  export let rowSize;
  export let colSize;

  export let image;
  export let alt = "hobbie";
  export let text;
  export let delay;
  export let href = "";
  $: element = undefined;
  let hovered = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<a
  class="container"
  style="--col:{col}; --row:{row}; --rowSize:{rowSize}; --colSize:{colSize}; --delay:{delay}ms"
  class:animate={!element}
  bind:this={element}
  on:mouseover={() => {
    hovered = true;
  }}
  on:mouseleave={() => {
    hovered = false;
  }}
  on:focus={() => {}}
  {href}
>
  <Image image={hobby} {hovered} />
  <img class="image" src={image} {alt} />
  <div>{text}</div>
</a>

<style>
  a {
    text-decoration: none;
    color: black;
  }
  .container {
    position: relative;
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);
    background-color: white;
    padding: 8pt;
    border-radius: 10pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5pt;
    margin-bottom: 5pt;
    width: auto;
    overflow: visible;

    font-weight: 400;

    justify-content: space-between;
    transition-delay: var(--delay);
  }

  .container.animate {
    transform: translate(-550pt, 125pt);
  }

  .image {
    height: 20pt;
  }
</style>
