<script lang="ts">
  import Noticia from '$lib/components/noticia.svelte'
  import noticias from '$lib/noticias.json'

  let displayNoticias = noticias.slice(1, -1)
</script>

<svelte:head>
  <title>ESA - Notícias</title>
</svelte:head>

<article>
  <section>
    <h1>Notícias</h1>
    <div class="grid gap-2 grid-auto-fit grid-material-group" style="--size: 300px;">
      {#each displayNoticias as noticia}
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