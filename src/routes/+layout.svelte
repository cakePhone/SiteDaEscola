<script lang="ts">
  import "../app.pcss";
  import Icon from "@iconify/svelte";
  import {page} from "$app/stores";

  import {isCurrentPage} from "$lib";

  let y: number = 1;
  let lastY: number = 1;
  let lastScrollUpY: number = 1;
  let innerHeight: number = 1;
  let innerWidth: number = 1

  let scrollDirection: boolean = true;

  let navIsOpen: boolean = false;
  let navHide: boolean = false;

  let url: string | null;

  function getThemeURL(name: string) {
    return new URL(`../${name}.css`, import.meta.url).href;
  }

  function shouldHide() {
    if (innerWidth > 768 || navIsOpen) return

    scrollDirection = lastY - y >= 0;
    lastY = y;

    // cima
    if (scrollDirection) {
      lastScrollUpY = y;
      return navHide = false;
    }

    // baixo
    if (y - lastScrollUpY > innerHeight / 3)
      return navHide = true;
  }

  function scrollToTop() {

    window!.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // Natal
  let epocaNatalicia: boolean = false
  let data: Date = new Date()
  if ((data.getMonth() === 11 && data.getDate() > 10) || (data.getMonth() === 0 && data.getDate() < 10)) epocaNatalicia = true

  $: url = $page.route.id!
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight} bind:innerWidth={innerWidth}
               on:scroll={shouldHide}/>

<svelte:head>
  {#if epocaNatalicia}
    <link rel="stylesheet" type="text/css" href={getThemeURL("natal")}/>
  {:else}
    <link rel="stylesheet" type="text/css" href={getThemeURL("tema")}/>
  {/if}
</svelte:head>

<header data-open={navIsOpen} data-hide={navHide} class:scrollPastScreen={y > innerHeight && !navIsOpen && url === "/"}
        class="header">
  <h1 class="text-xl md:text-2xl font-black">
    Escola Secundária de Amarante
  </h1>
  <nav>
    <a href="/" on:click={() => navIsOpen = false} class:current-page={isCurrentPage(url, "")}>
      <Icon icon="ic:round-home"/>
      Início
    </a>
    <a href="/escola" on:click={() => navIsOpen = false} class:current-page={isCurrentPage(url, "escola")}>
      <Icon icon="ic:round-school"/>
      Escola
    </a>
    <a href="/exames" on:click={() => navIsOpen = false} class:current-page={isCurrentPage(url, "exames")}>
      <Icon icon="ic:round-book"/>
      Exames
    </a>
    <a href="/documentos" on:click={() => navIsOpen = false} class:current-page={isCurrentPage(url, "documentos")}>
      <Icon icon="ic:round-folder"/>
      Documentos
    </a>
    <a href="/contatos" on:click={() => navIsOpen = false} class:current-page={isCurrentPage(url, "contatos")}>
      <Icon icon="ic:round-contact-mail"/>
      Contatos
    </a>
  </nav>

  <label class="xl:hidden transition-all cursor-pointer text-2xl drop-shadow-md">
    <input type="checkbox" bind:checked={navIsOpen} class="hidden"/>
    {#if navIsOpen}
      <Icon icon="ic:round-close"/>
    {:else}
      <Icon icon="ic:round-menu"/>
    {/if}
  </label>
</header>

<button on:click={scrollToTop} class:!bottom-4={y > innerHeight / 3} id="scroll-to-top"
        class="fixed -bottom-12 right-4 bg-surface-600 h-12 w-12 rounded-xl text-headings transition-all shadow-xl shadow-surface-100/50">
  <Icon icon="ic:round-arrow-drop-up" class="h-12 w-12"/>
</button>

<main>
  <slot/>
</main>

<footer>
  <div class="flex flex-col gap-6 place-content-between md:flex-row">
    <div class="flex gap-4 h-fit flex-wrap [&>*]:rounded-md [&>*]:h-fit [&>*]:md:h-24 [&>*]:bg-white">
      <img
          src="$lib/images/logo_poch_ue1.png"
          alt="Cofinanciado por: POCH, União Europeia, Portugal 2020"
          class="p-2"
      />
      <img
          src="$lib/images/LogoESA.jpg"
          alt="Logo da Escola Secundária/3 de Amarante"
      />
      <img
          src="$lib/images/selo_peq.png"
          alt="Logo da Escola Secundária/3 de Amarante"
      />
      <img
          src="$lib/images/selo_escola_saudavel_peq.png"
          alt="Logo da Escola Secundária/3 de Amarante"
      />
    </div>
  </div>

  <div class="pt-8">
    <h2>Contatos</h2>
    <hr/>
    <div class="grid grid-auto-fit gap-2">
      <div>
        <h3>Telefone</h3>
        <a href="phoneto:255410190">255410190</a>
      </div>

      <div>
        <h3>Email</h3>
        <a href="mailto:geral@esamarante.edu.pt">geral@esamarante.edu.pt</a>
      </div>

      <div>
        <h3>Morada</h3>
        <p>
          Av. General Vitorino Laranjeira 592 <br/>
          4600-018 Amarante
        </p>
      </div>

      <div>
        <h3>Manutenção do site</h3>
        <a href="mailto:pedrocarvalho@esamarante.edu.pt">Prof. Pedro Carvalho</a>
      </div>
    </div>
    <hr/>
    <p>
      &copy;Copyright 2024 - Escola Secundária de Amarante | Desenvolvido por
      <a href="https://cakephone.github.io/" target="_blank">Miguel André Leal Santos</a>,
      um aluno da escola.
    </p>
  </div>
</footer>

<style lang="postcss">
  header[data-hide="true"] {
    @apply -top-32;
  }

  header[data-open="true"] {
    @apply h-screen w-screen p-4 flex flex-col items-center place-content-evenly;
  }

  header[data-open="true"] :is(nav, h1) {
    @apply flex flex-col text-2xl text-center;
  }

  header[data-open="true"] a {
    @apply p-3 px-4 text-2xl;
  }

  header[data-open="true"] label {
    @apply text-3xl;
  }

  header.scrollPastScreen {
    background: color-mix(in srgb, var(--surface-950), transparent 20%);
    @apply text-headings-dark backdrop-blur-sm md:backdrop-blur-md
  }

  header:not(.scrollPastScreen) h1 {
    @apply text-headings drop-shadow-md
  }

  header nav {
    @apply hidden gap-1 rounded-xl overflow-hidden xl:flex
  }

  header nav a {
    @apply font-bold flex items-center gap-1 transition-all bg-surface-850 rounded-md p-2 px-3 hover:bg-surface-950 text-xl text-headings-dark;
  }

  header nav a.current-page {
    @apply bg-accent-750 hover:bg-accent-850;
  }

  header.scrollPastScreen nav a {
    @apply bg-transparent hover:bg-surface-750 rounded-xl
  }

  header.scrollPastScreen nav a.current-page {
    @apply bg-accent-650 hover:bg-accent-750
  }

  footer {
    @apply bg-surface-100 p-8 flex flex-col items-center;
  }

  footer > div {
    @apply max-w-screen-2xl w-full
  }

  footer :is(h1, h2, h3, h4, h5, h5, h6, p, a) {
    @apply text-headings
  }

  footer hr {
    @apply my-4 border-headings opacity-40
  }

  footer a {
    @apply underline hover:no-underline
  }

  footer p {
    @apply max-w-none
  }
</style>
