<script>
  import { onMount } from "svelte/internal";
  import { fade } from "svelte/transition";

  export let name;

  let message = "";

  onMount(() => {
    setTimeout(() => message = "Everything seems to be in working order.", 500);
  });
</script>

<style lang="scss">
  $color: green;

  :global(html) {
    font-family: sans-serif;
  }

  h1 {
    color: purple;
  }

  p {
    .sass {
      color: $color;
    }
  }
</style>

<h1>Hello {name}!</h1>
{#if message}
  <p>
    <span in:fade class="sass">{message}</span>
  </p>
{/if}
