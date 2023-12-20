<script lang="ts">
  import Icon from "@iconify/svelte"

  export let href: string;
  export let title: string;
</script>

<a {href} target="_blank" class="open-in-new">
  <Icon icon="ic:round-open-in-new" class="flex-shrink-0"/>
  {title}
</a>