<script>
  export let hovered = false;
  export let image;
</script>

<div class="ball {hovered ? 'visible' : ''}">
  <img class="image" src={image} alt="Job Experience" />
</div>

<style>
  .ball {
    position: absolute;
    top: -13pt;
    left: -13pt;
    width: 30pt;
    height: 30pt;
    background: black;
    border-radius: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
  }

  .ball.visible {
    opacity: 1;
  }

  .image {
    width: 50%;
  }
</style>
