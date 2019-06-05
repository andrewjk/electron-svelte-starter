<script>
  export let name;
</script>

<style type="text/sass">
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
