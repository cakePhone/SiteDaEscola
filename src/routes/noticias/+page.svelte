<script lang="ts">
  import Noticia from '$lib/components/noticia.svelte'
  import noticias from '$lib/noticias.json'
</script>

<svelte:head>
  <title>ESA - Notícias</title>
</svelte:head>

<article>
  <section>
    <h1>Notícias</h1>
    <div class="featured-news grid-auto-fit" style="--size: 250px;">
      {#each noticias as noticia}
        <Noticia
            image="{noticia.image}"
            title="{noticia.title}"
            description="{noticia.description}"
            date="{noticia.data}"
            link="{noticia.link}"
        />
      {/each}
    </div>
  </section>
</article>