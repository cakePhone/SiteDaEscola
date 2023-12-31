<script lang="ts">
  import {onMount} from "svelte";
  import {swipe} from "svelte-gestures"
  import Icon from "@iconify/svelte";

  const imgs: string[] = []

  let popup: boolean = false;
  let src: string;

  let popupViewIndex: number;

  function popUp(event: Event) {
    const target: HTMLImageElement | null = event.target as HTMLImageElement;
    src = target!.src;

    popupViewIndex = parseInt(src.slice(-6, -4).replace(/\D/g, '')) - 1;

    popup = true
  }

  function switchImage(direction: boolean) {
    if (direction) {
      if (popupViewIndex + 1 <= 39) popupViewIndex++;
      return src = imgs[popupViewIndex];
    }
    if (popupViewIndex - 1 >= 0) popupViewIndex--
    return src = imgs[popupViewIndex]
  }

  function swipeImage(event: CustomEvent) {
    let directionString = event.detail.direction;
    switch (directionString) {
      case "left":
        switchImage(true)
        break;
      case "right":
        switchImage(false)
        break;
      default:
        return
    }
  }

  onMount(() => {
    for (let i = 1; i <= 40; i++) {
      imgs[i - 1] = `/escola/galeria/i${i}.jpg`
    }
  })
</script>

<svelte:head>
  <title>ESA - Galeria</title>
</svelte:head>

<section
    class="fixed z-50 top-0 left-0 h-screen w-screen flex justify-center items-center bg-surface-50 bg-opacity-60 !p-0"
    class:hidden={!popup} use:swipe={{ timeframe: 300, minSwipeDistance: 60 }} on:swipe={swipeImage}
>
  <div class="flex text-headings items-center">
    <button on:click={() => switchImage(false)} class:hidden={popupViewIndex === 1}>
      <Icon icon="ic:round-arrow-left" class="h-16 w-16 hidden lg:block"/>
    </button>
    <img {src} alt="" class="min-w-full lg:w-[50vw]"/>
    <button on:click={() => switchImage(true)} class:hidden={popupViewIndex === 40}>
      <Icon icon="ic:round-arrow-right" class="h-16 w-16 hidden lg:block"/>
    </button>
  </div>
  <button on:click={() => {popup = false}} class="absolute top-10 right-10">
    <Icon icon="ic:round-close" class="text-headings h-10 w-10"/>
  </button>
</section>

<article>
  <section>
    <h1 id="galeria">Galeria</h1>
    <div class="grid grid-material-group grid-auto-fit" style="--size: 300px;">
      {#each imgs as img}
        <!-- eslint-disable-next-line --><!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img src={img} alt="" class="rounded-md transition-all cursor-zoom-in" on:click={popUp}/>
      {/each}
    </div>
  </section>
</article>