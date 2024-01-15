<script>
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
  <div class="date-container">
    <div class="date date-day">27</div>
    <div class="slash">/</div>
    <div class="date date-month">01</div>
    <div class="slash">/</div>
    <div class="date date-year">99</div>
  </div>
</div>

<style>
  .container {
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);
    background-color: white;
    overflow: hidden;
    padding: 10pt;
    border-radius: 7pt;

    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    justify-content: space-around;

    margin-right: 5pt;
    margin-bottom: 5pt;
  }

  .container.animate {
    transform: translate(550pt, -550pt);
  }

  .date-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slash {
    font-size: 25pt;
    font-weight: 400;
    color: grey;
    margin: 0pt 3pt;
  }

  .date {
    font-size: 20pt;
    font-weight: 100;
  }
</style>
