<script>
  import Grid from "./components/grid.svelte";
  import image from "../public/images/background1.png";
</script>

<div class="background" style="background-image: url({image})"></div>
<div class="app-container">
  <Grid />
</div>

<style>
  .background {
    width: 100%;
    height: 100%;

    margin: -10pt -10pt 0pt -10pt;
    position: absolute;
    display: flex;

    backdrop-filter: blur(10px);
    -webkit-filter: blur(8px);

    background-size: 100%;
    padding: 10pt;
  }

  .app-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
