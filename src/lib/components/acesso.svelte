<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon: string = "solar:folder-error-bold";
  export let title: string = "";
  export let link: string = "#";
</script>

<a href={link} class="card" target="#">
  {#if icon.startsWith('/')}
    <img src={icon} alt="Icone {title}" class="h-16 w-16 object-fill invert">
  {:else}
    <Icon icon={icon} class="h-16 w-16"></Icon>
  {/if}
  <p>{title}</p>
</a>

<style lang="postcss">
  a {
    @apply flex flex-col items-center justify-around text-center;
  }
</style>