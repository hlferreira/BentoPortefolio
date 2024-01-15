<script>
  import { mouseStore } from "../stores/mouseStore.ts";
  import image from "../../public/images/profilepic.jpg";

  export let row;
  export let col;
  export let rowSize;
  export let colSize;

  //Not working
  $: element = undefined;
  $: clientWidth = 0;
  $: clientHeight = 0;
  $: middleX = (element?.getBoundingClientRect().x || 0) + clientWidth / 2;
  $: middleY = (element?.getBoundingClientRect().y || 0) + clientHeight / 2;

  $: xDeg = (($mouseStore.x - middleX) / clientWidth) * 20;
  $: yDeg = (($mouseStore.y - middleY) / clientHeight) * 20;
</script>

<div
  class="container"
  class:animate={!element}
  style="--col:{col}; --row:{row}; --rowSize:{rowSize}; --colSize:{colSize}; --xDeg:{-yDeg}deg; --yDeg:{xDeg}deg"
  bind:clientWidth
  bind:clientHeight
  bind:this={element}
>
  <div class="dot"></div>

  <img src={image} alt="Profile Henrique Ferreira" />
  <div class="name">Henrique Ferreira</div>
</div>

<style>
  .container {
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);
    background-color: white;
    overflow: hidden;
    padding: 10pt;
    border-radius: 10pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5pt;
    margin-bottom: 5pt;
  }

  .container.animate {
    position: absolute;
    transform: translate(-550pt, -550pt);
  }

  .container:hover {
    transform: rotateX(var(--xDeg)) rotateY(var(--yDeg));
  }

  img {
    width: 30%;
    height: auto;
    border-radius: 100%;
    margin-right: 20pt;
  }

  .name {
    font-size: 20pt;
    font-weight: 100;
  }
</style>
