<script>
  import TechStack from "./tech/techStack.svelte";
  import { techStore, Level } from "./../stores/technologiesStore.ts";
  import Image from "./image/image.svelte";
  import image from "../../public/images/icons/gear-white.png";
  export let row;
  export let col;
  export let rowSize;
  export let colSize;

  $: element = undefined;
  let hovered = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="container"
  style="--col:{col}; --row:{row}; --rowSize:{rowSize}; --colSize:{colSize}"
  class:animate={!element}
  bind:this={element}
  on:mouseover={() => {
    hovered = true;
  }}
  on:mouseleave={() => {
    hovered = false;
  }}
  on:focus={() => {}}
>
  <Image {image} {hovered} />

  {#if $techStore}
    <!-- content here -->
    <TechStack name="Proficient" techs={$techStore[Level.Proficient]} />
    <TechStack name="Competent" techs={$techStore[Level.Comfortable]} />
    <TechStack name="Have tried" techs={$techStore[Level.HaveUsed]} />
  {/if}
</div>

<style>
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
  }

  .container.animate {
    transform: translate(-550pt);
  }
</style>
