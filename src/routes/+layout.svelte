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
  if (typeof document != "undefined") {
    let css = document.styleSheets[0]

    if (epocaNatalicia) {
      css.insertRule(`
      :root {
          --surface-950: #ffebe9;
          --surface-900: #fed7d4;
          --surface-850: #fcc3be;
          --surface-800: #f9aea9;
          --surface-750: #f59a94;
          --surface-700: #f18480;
          --surface-650: #eb6e6b;
          --surface-600: #e55657;
          --surface-550: #ff5133;
          --surface-500: #de3a42;
          --surface-450: #ba0324;
          --surface-400: #9e021d;
          --surface-350: #840116;
          --surface-300: #6a0110;
          --surface-250: #52000a;
          --surface-200: #3b0005;
          --surface-150: #250002;
          --surface-100: #100001;
          --surface-50: #020000;
      }`)
    } else {
      css.insertRule(`
      :root {
        --surface-950: #eaf3ff;
        --surface-900: #d5e7ff;
        --surface-850: #bfdbff;
        --surface-800: #aaceff;
        --surface-750: #95c2ff;
        --surface-700: #80b5ff;
        --surface-650: #6aa8ff;
        --surface-600: #549bff;
        --surface-550: #3b8dff;
        --surface-500: #1c7eff;
        --surface-450: #176dde;
        --surface-400: #125cbe;
        --surface-350: #0d4c9e;
        --surface-300: #083c80;
        --surface-250: #052d63;
        --surface-200: #021f48;
        --surface-150: #01112e;
        --surface-100: #000516;
        --surface-50: #000103;
      }
      `)
    }
  }

  $: url = $page.route.id!.toString();
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight} bind:innerWidth={innerWidth}
               on:scroll={shouldHide}/>

<header data-open={navIsOpen} data-hide={navHide} class:scrollPastScreen={y > innerHeight && !navIsOpen && url === "/"}
        class:headernatal={epocaNatalicia}>
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

<button on:click={scrollToTop} class:!bottom-4={y > innerHeight / 3}
        class="fixed -bottom-12 right-4 bg-surface-600 h-12 w-12 rounded-xl text-headings transition-all">
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

  <div>
    <h2>Contatos</h2>
    <hr class="my-4"/>
    <div class="contacts">
      <div>
        <h3>Telefone</h3>
        <p>255410190</p>
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
    </div>
  </div>
</footer>

<style lang="postcss">
  header {
    @apply p-4 flex items-center sticky top-0 bg-surface-700 w-full place-content-between text-headings
    transition-all z-50 min-h-[4.5rem];
  }

  header.headernatal {
    @apply bg-surface-500
  }

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
    background: linear-gradient(#d5e7ff, #d5e7ff99);
    @apply text-headings-dark backdrop-blur-sm md:backdrop-blur-md
  }

  header.scrollPastScreen.headernatal {
    background: linear-gradient(#ffebe9, #ffebe999);
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
    @apply bg-surface-100 p-4 flex flex-col text-text justify-between gap-6;
  }

  footer :is(h1, h2, h3, h4, h5, h6, p, a) {
    @apply text-headings text-xl;
  }

  .contacts {
    @apply flex gap-10 flex-col md:flex-row;
  }

  .contacts h3 {
    @apply font-bold text-lg;
  }
</style>
