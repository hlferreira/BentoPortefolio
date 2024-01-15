<script>
  import phone from "../../../public/images/phone.png";
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
  <img src={phone} alt="phone" />
  <div class="text">(+351) 929 196 501</div>
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
    text-align: center;
    justify-content: space-around;
    transition-delay: 100ms;
  }

  .container.animate {
    transform: translate(0, 125pt);
  }

  img {
    height: 100%;
    margin-left: 10pt;
  }

  .text {
    width: 100%;
    font-size: 20pt;
    font-weight: 100;
  }
</style>
