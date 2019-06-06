<script>
  export let name;
</script>

<style lang="scss">
  $color: green;

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
<p>
  <span class="sass">I have a Sass style.</span>
</p>
