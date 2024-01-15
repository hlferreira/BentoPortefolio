<script lang="ts">
  import Technologies from "./../technologies.svelte";
  export let tech: Technologies;
</script>

<a href="https://www.google.com/search?q={tech.name}">
  <img src={tech.url} alt={tech.name} />
</a>

<style>
  a {
    text-decoration: none;
    color: black;
  }
  img {
    border-radius: 2pt;
    max-height: 25pt;
    max-width: 25pt;
  }
</style>
