<script lang="ts">
  import Icon from '@iconify/svelte';
  import Noticia from "$lib/components/noticia.svelte";
  import Acesso from "$lib/components/acesso.svelte";
  import Galaxia from "$lib/components/galaxia.svelte";

  import {handleAnchorClick} from "$lib";

  import noticias from "$lib/noticias.json";
  import {onMount} from "svelte";

  const limiteNoticias: number = 10;
  let noticiasRecentes: typeof noticias = noticias.slice(0, limiteNoticias);

  let y: number;
  let windowWidth: number;

  // Natal
  let nFlocos: number = 40;
  let flocos: { x: number, y: number, delay: number, duration: number }[] = []

  let epocaNatalicia: boolean = false
  const data: Date = new Date()

  function reassignSpacing(width: number) {
    for (let i = 0; i < nFlocos; i++) {
      flocos[i] = {x: width/nFlocos * i, y: 0, delay: Math.random() * 20, duration: 8 + Math.random() * 8}
    }
  }

  onMount(() => {
    if((data.getMonth() === 11 && data.getDate() > 10) || (data.getMonth() === 0 && data.getDate() < 10)) epocaNatalicia = true;
    reassignSpacing(windowWidth)
  })

  $: reassignSpacing(windowWidth)
  $: nFlocos = (windowWidth > 900) ? 80 : 40;
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={windowWidth}></svelte:window>

<svelte:head>
  <title>Escola Secundária de Amarante</title>
</svelte:head>

<div
    class="h-[calc(100svh-4.5rem)] bg-cover bg-center bg-[url('/hero.jpg')] grid content-center text-center text-headings p-4"
    class:natal={epocaNatalicia}
>
  <h1 class="text-4xl md:text-5xl font-black text-headings -mt-20" style="text-shadow: 0 2px 10px rgb(0 0 0 / 80%)">
    Escola Secundária de Amarante
  </h1>
  <h2 class="text-xl md:text-2xl font-bold text-headings" style="text-shadow: 0 2px 10px rgb(0 0 0 / 80%)">Uma escola para todos</h2>
  <nav class="grid mt-20 lg:w-[40vw] lg:justify-self-center grid-material-group grid-auto-fit hot-nav"
       style="--size: 150px;">
    <a href="#noticias" on:click={handleAnchorClick}>Notícias</a>
    <!--<a href="#guias" on:click={handleAnchorClick}>Guias</a>-->
    <a href="#ano-letivo" on:click={handleAnchorClick}>Ano Letivo</a>
    <a href="#universo-esa" on:click={handleAnchorClick}>Universo ESA</a>
    <a href="#acessos" on:click={handleAnchorClick}>Acessos</a>
  </nav>

  <div class:opacity-0={y > 200}
       class="absolute bottom-6 text-center animate-bounce justify-self-center drop-shadow-sm transition-all">
    <Icon icon="ic:round-arrow-drop-down"
          class="w-20 h-20"
    />
  </div>
  {#if epocaNatalicia}
    <div class="absolute top-0 left-0 h-screen w-screen overflow-hidden pointer-events-none">
      {#each flocos as floco}
        <div style="top: {floco.y}px; left: {floco.x}px;" class="absolute transition-all">
          <div class="relative">
            <Icon icon="ion:snow" width="20" class="relative" style="animation: snowfall infinite {floco.duration}s linear; animation-delay: {floco.delay}s"/>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<article>
  <section id="noticias">
    <h1>Notícias Recentes</h1>
    <h3 class="p-4 bg-accent-700 text-headings-dark rounded-xl">
      A partir do dia 6 de novembro de 2023, os alunos que trouxerem "marmita" podem dirigir-se, das 12:00 às 14:00
      horas, junto da Sala da Associação de Estudantes.
    </h3>
    <div class="grid grid-auto-fit grid-material-group" style="--size: 300px;">
      {#each noticiasRecentes as noticia}
        <Noticia
            image="{noticia.image}"
            title="{noticia.title}"
            description="{noticia.description}"
            date="{noticia.data}"
            link="{noticia.link}"
        />
      {/each}
    </div>
    <div class="flex justify-center">
      <a href="noticias" class="p-4 bg-accent-700 transition-all hover:bg-accent-600 rounded-xl">Mais Notícias</a>
    </div>
  </section>

  <!--<section id="guias">
    <h1>Guias</h1>
    <div class="grid-material-group grid-auto-fit">
      <a href="/guias/guiao_acolhimento_ao_aluno.pdf" class="card" target="#">
        <h2>Acolhimento ao Aluno</h2>
      </a>

      <a href="https://docs.google.com/presentation/d/e/2PACX-1vRxy7YB99vIoLYUCR2DnWdAa5jSpTvLSSU0NrDrQZzT2bCHU4kM7P4TKrXSBIM8CQ/pub?start=false&loop=false&delayms=3000#slide=id.p2"
         class="card" target="_blank">
        <h2>Inovar Consulta para Encarregados de Educação</h2>
      </a>
    </div>
  </section>-->

  <section id="ano-letivo">
    <h1>Ano Letivo 2023-2024</h1>
    <div class="grid grid-material-group grid-auto-fit" style="--size: 500px;">
      <a href="." class="card" target="_blank">
        <h2>Horários Alunos</h2>
      </a>
      <a href="." class="card" target="_blank">
        <h2>Calendário Escolar</h2>
      </a>
      <a href="." class="card" target="_blank">
        <h2>Manuais Escolares - Ensino Regular</h2>
      </a>
      <a href="." class="card" target="_blank">
        <h2>Manuais Escolares - Ensino Profissional</h2>
      </a>
      <a href="." class="card" target="_blank">
        <h2>Consultórios - Recuperação de Aprendizagens</h2>
      </a>
      <a href="." class="card" target="_blank">
        <h2>Critérios de Avaliação</h2>
      </a>
    </div>
  </section>

  <section id="universo-esa">
    <h1>Universo ESA</h1>
    <div class="grid grid-material-group grid-auto-fit" style="--size: 350px;">
      <Galaxia thumbnail="/universo-esa/logo_bib_esa.jpg" title="Biblioteca" description="Biblioteca escolar da ESA"
               href="https://sites.google.com/esamarante.edu.pt/biblioteca-da-esa/p%C3%A1gina-inicial"/>

      <Galaxia thumbnail="/universo-esa/pnc.jpg" title="PNC" description="Plano Nacional de Cinema na ESA"
               href="https://pnc.polegarmente.me/"/>

      <Galaxia thumbnail="/universo-esa/logo-erasmusplus.jpg" title="Erasmus +"
               description="Os projetos ERASMUS+ da ESA" href="https://www.esamarante.edu.pt/erasmus/"/>

      <Galaxia thumbnail="/universo-esa/logo_eqavet.jpg" title="EQAVET" description="Selo de Conformidade EQAVET"
               href="https://esamarante.edu.pt/eqavet/index.html"/>

      <Galaxia thumbnail="/universo-esa/ideia.jpg" title="IDEIA.PT" description="Gabinete IDEIA.pt"/>

      <Galaxia thumbnail="/universo-esa/emaei.png" title="EMAEI"
               description="Equipa Multidisciplinar de Apoio à Educação Inclusiva"/>

      <Galaxia thumbnail="/universo-esa/clube_patrimonio.png" title="Clube do Património" description=""
               href="https://sites.google.com/esamarante.edu.pt/clubedopatrimonio/"/>

      <Galaxia thumbnail="/universo-esa/escoladigital.png" title="Escola Digital" description="Kits de Computadores"
               href="https://escoladigital.esamarante.edu.pt/"/>

      <Galaxia thumbnail="/universo-esa/de.jpg" title="Desporto Escolar" description="Desporto Escolar da ESA"
               href="https://desportoescolaresa.blogspot.com/"/>

      <Galaxia thumbnail="/universo-esa/cartaz_mosaico.jpg" title="PJ" description="Parlamento dos Jovens"/>

      <Galaxia thumbnail="/universo-esa/clube_ciencia_viva.png" title="Clube Ciência Viva"
               description="Site do Clube Ciência Viva"
               href="https://sites.google.com/esamarante.edu.pt/ciencia-viva-esa/p%C3%A1gina-inicial"/>

      <Galaxia thumbnail="/universo-esa/logo_eco.png" title="Eco-Escolas"
               description="Clube Eco-Escolas"/>
    </div>
  </section>

  <section id="acessos">
    <h1>Acessos</h1>
    <div class="grid grid-material-group grid-auto-fit" style="--size: 150px;">
      <Acesso icon="ic:round-school" title="Inovar Alunos"
              link="https://esamarante.inovarmais.com/alunos/Inicial.wgx"/>
      <Acesso icon="ic:round-fact-check" title="Inovar Consulta"
              link="https://esamarante.inovarmais.com/consulta/app/index.html#/login"/>
      <Acesso icon="ic:round-local-activity" title="Inovar PAA"
              link="https://esamarante.inovarmais.com/consulta/app/index.html#/login"/>
      <Acesso icon="ic:round-assignment" title="SIGA"
              link="https://siga.edubox.pt/auth"/>
      <Acesso icon="/icon_cfaeab.png" title="Centro de Formação"
              link=""/>
      <Acesso icon="/icon_cqep.png" title="Centro Qualifica"
              link=""></Acesso>
    </div>
  </section>
</article>