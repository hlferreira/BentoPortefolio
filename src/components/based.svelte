<script>
  import image from "../../public/images/flag-of-portugal.svg";

  export let row;
  export let col;
  export let rowSize;
  export let colSize;
  $: element = undefined;
</script>

<div
  class="container"
  style="--col:{col}; --row:{row}; --rowSize:{rowSize}; --colSize:{colSize}"
  class:animate={!element}
  bind:this={element}
>
  <img src={image} alt="Portugal" />
  <div class="text">Lisbon, Portugal</div>
</div>

<style>
  .container {
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);
    background-color: white;
    overflow: hidden;
    padding: 8pt;
    border-radius: 7pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5pt;
    margin-bottom: 5pt;
  }

  .container.animate {
    transform: translate(0, -550pt);
  }

  img {
    width: auto;
    height: 100%;
    border-radius: 5pt;
    margin-right: 30pt;
  }

  .text {
    font-size: 20pt;
    font-weight: 100;
  }
</style>
