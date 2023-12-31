<script lang="ts">
  import Icon from "@iconify/svelte";

  export let image: string;
  export let title: string = "Título";
  export let description: string;
  export let date: string = "Sem data";
  export let link: string;

  export let openInNew: boolean = true;
</script>

{#if openInNew}
  <a href="{link}" class="card" target="_blank">
    {#if image}
      <img
          src="{image}"
          alt=""
          class="w-full aspect-[1.5] object-cover rounded-md flex-shrink-0"
      />
    {:else}
      <Icon icon="ic:round-error" class="h-52 w-full flex-shrink-0"/>
    {/if}

    <h2 class:h-full="{!description}">{title}</h2>
    {#if description}
      <p class="h-full max-h-32 line-clamp-2">
        {description}
      </p>
    {/if}
    <p class="text-right">Postado em: {date}</p>
  </a>
{:else}
  <a href="{link}" class="card">
    {#if image}
      <img
          src="{image}"
          alt=""
          class="w-full aspect-[1.5] object-cover rounded-md flex-shrink-0"
      />
    {:else}
      <Icon icon="ic:round-error" class="h-52 w-full flex-shrink-0"/>
    {/if}

    <h2 class:h-full="{!description}">{title}</h2>
    {#if description}
      <p class="h-full max-h-32 line-clamp-2">
        {description}
      </p>
    {/if}
    <p class="text-right">Postado em: {date}</p>
  </a>
{/if}

<style lang="postcss">
  a {
    @apply flex flex-col gap-2;
  }

  h2 {
    @apply text-xl text-headings-dark font-bold;
  }

  p {
    @apply text-text-dark;
  }
</style>
