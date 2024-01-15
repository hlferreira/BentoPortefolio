<script>
  export let image;
  export let country;
  export let skill;

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
  <img src={image} class="flag" alt={country} />
  <div class="country-wrapper">
    <div class="country">{country}</div>
    <div class="skill">{skill}</div>
  </div>
</div>

<style>
  .container {
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);
    background-color: white;
    overflow: hidden;
    padding: 8pt;
    border-radius: 5pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5pt;
    margin-bottom: 5pt;
    position: relative;

    justify-content: space-between;
    text-align: right;
    font-weight: 400;
  }

  .container.animate {
    transform: translate(0pt, 125pt);
  }

  .flag {
    border-radius: 3pt;
    width: auto;
    height: 80%;
    margin-right: 5pt;
  }

  .country {
    font-size: 10pt;
  }

  .skill {
    margin-top: -2pt;
    font-size: 6pt;
  }
</style>
