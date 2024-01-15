<script lang="ts">
  import type { Project } from "./../../stores/projectsStore.ts";
  export let row;
  export let rowSize;
  export let col;
  export let colSize;
  export let project: Project;
</script>

<a
  class="project-container container"
  style="--row:{row}; --col:{col}; --rowSize:{rowSize}; --colSize:{colSize}"
  href={project.link}
>
  <div class="image-wrapper">
    <img class="image" src={project.images.main} alt={project.name} />
  </div>
  <div class="description">
    {project.description.short}
  </div>
  <div class="project-footer">
    <div class="time">
      {project.date.startDate} - {project.date.endDate}
    </div>
    <div>
      {#each project.technologies as tech}
        <img class="technologies" src={tech.image} alt={tech.name} />
      {/each}
    </div>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    color: black;
  }
  .project-container {
    grid-row: var(--row) / span var(--rowSize);
    grid-column: var(--col) / span var(--colSize);
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
    max-width: var(--size);
    padding: 5pt;
    border-radius: 10pt;

    justify-content: space-between;
    min-width: 0;
    z-index: 1000;
  }
  .project-container:not(:last-child) {
    margin-right: 5pt;
  }
  .image-wrapper {
    max-width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    max-width: 80%;
    max-height: 90%;
  }
  .description {
    height: 40%;
    widows: 100%;
    font-size: 10pt;
  }
  .project-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8pt;
    font-weight: 100;
  }
  .technologies {
    max-width: 15pt;
    max-height: 15pt;
    height: auto;
  }
</style>
