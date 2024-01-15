<script>
  export let row;
  export let col;

  export let image;
  export let alt;
  export let href;
  $: element = undefined;
</script>

<a
  class="container"
  style="--col:{col}; --row:{row}; --rowSize:{1}; --colSize:{1}"
  {href}
  class:animate={!element}
  bind:this={element}
>
  <img src={image} {alt} />
</a>

<style>
  .container {
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);
    background-color: white;
    overflow: hidden;
    padding: 5pt;
    border-radius: 6pt;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    margin-right: 5pt;
    margin-bottom: 5pt;
  }

  .container.animate {
    transform: translate(0, 125pt);
  }

  img {
    height: 80%;
    width: auto;
  }
</style>
