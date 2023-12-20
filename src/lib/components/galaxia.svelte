<script lang="ts">
  export let thumbnail: string;
  export let title: string;
  export let description: string;
  export let href: string = "#";
</script>

<a {href} class="card" target="_blank">
  {#if thumbnail}
    <img src={thumbnail} alt={title}/>
  {/if}
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
</a>

<style lang="postcss">
  a {
    @apply flex gap-2 items-center;
  }

  img {
    @apply rounded-md w-24 h-24 object-cover;
  }

  h2 {
    @apply text-xl
  }
</style>