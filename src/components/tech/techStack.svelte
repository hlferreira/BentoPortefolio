<script>
  import Tech from "./tech.svelte";

  export let name = "";
  export let techs;
</script>

<div class="wrapper">
  <div class="title">{name}</div>
  <div class="techs">
    {#each techs as tech}
      <Tech {tech} />
    {/each}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    position: relative;
  }
  .title {
    text-decoration: underline;
    margin-bottom: 2pt;
  }
  .techs {
    position: relative;
    width: 100%;
  }
</style>
