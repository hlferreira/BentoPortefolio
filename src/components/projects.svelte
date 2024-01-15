<script>
  import { projectsStore } from "./../stores/projectsStore.ts";
  import Project from "./projects/projects.svelte";
  export let row;
  export let col;
  export let rowSize;
  export let colSize;

  $: console.log($projectsStore);

  $: element = undefined;
</script>

<div
  class="container"
  style="--col:{col}; --row:{row}; --rowSize:{rowSize}; --colSize:{colSize}"
  class:animate={!element}
  bind:this={element}
>
  <div class="title">Projects</div>
  {#each $projectsStore as project, i}
    <Project col={i * 3 + 1} row="2" rowSize="8" colSize="3" {project} />
  {/each}
</div>

<style>
  .container {
    grid-column: var(--col) / span var(--colSize);
    grid-row: var(--row) / span var(--rowSize);

    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(12, 1fr);

    padding: 5pt;
    border-radius: 10pt;
    border: 3pt solid white;

    margin-right: 5pt;
    margin-bottom: 5pt;
    transition: none;
    transform: none;
  }

  .container:hover {
    transition: none;
  }

  .container > * {
    border-radius: 5pt;
    background-color: white;
    padding: 5pt;
    box-shadow: 0px 0px 10px black;
  }

  .container.animate {
    transform: translate(550pt, 550pt);
  }

  .title {
    grid-column: 1 / span 12;
    font-size: 30pt;
    border-radius: 7pt;
    margin-bottom: 5pt;
  }
</style>
