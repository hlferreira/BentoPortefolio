<script>
  import image from "../../public/images/cv.png";
  import cv from "../../public/images/CV/cv.pdf";
  export let row;
  export let col;
  export let rowSize;
  export let colSize;
  $: element = undefined;
</script>

<a
  class="container"
  style="--col:{col}; --row:{row}; --rowSize:{rowSize}; --colSize:{colSize}"
  class:animate={!element}
  bind:this={element}
  href={cv}
  download="henriqueFerreiraCV.pdf"
>
  <img src={image} alt="Curriculum Vitae" />
</a>

<style>
  .container {
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);
    background-color: white;
    overflow: hidden;
    border-radius: 6pt;

    display: flex;
    flex-direction: column;

    margin-right: 5pt;
    margin-bottom: 5pt;
    justify-content: center;
    align-items: center;
  }

  .container.animate {
    transform: translate(500pt, 0), scaleX(0);
  }

  img {
    height: 100%;
    width: 80%;
  }
</style>
