<script lang="ts">
  export let src: string = "/";
  export let type: string = "";
</script>

<video controls>
  <source {src} {type}>
</video>