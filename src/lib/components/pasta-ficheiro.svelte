<script lang="ts">
  import Icon from "@iconify/svelte";

  export let title: string;
  export let href: string;

</script>

<a {href}>
  <Icon icon="ic:round-folder" class="h-24 w-24"/>
  <p>{title}</p>
</a>

<style lang="postcss">
  a {
    @apply max-w-[8rem] flex flex-col items-center;
  }

  p {
    @apply text-center -mt-2;
  }
</style>