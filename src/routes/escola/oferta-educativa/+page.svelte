<script lang="ts">
  import ImageGaleria from "$lib/components/imageGaleria.svelte"
  import Icon from "@iconify/svelte";
</script>

<article>
  <section class="prose">
    <h1>Oferta Educativa e Formativa 2023-2024</h1>
    <ImageGaleria src="/escola/oferta-educativa/oferta_23_24.jpg" alt="Banner Oferta Educativa 2023-2024"/>
    <img src="$lib/images/logo_poch_ue1.png"
         alt="Cofinanciado por: POCH; Fundo Social Europeu; Portugal 2020"/>

    <hr>

    <a href="/escola/oferta-educativa/oferta_formativa_23_24.pdf" target="_blank" class="open-in-new link-button">
      Ensino Secundário Regular
      <Icon icon="ic:round-open-in-new"/>
    </a>
    <a href="/escola/oferta-educativa/oferta_profissionais_23_24.pdf" target="_blank" class="open-in-new link-button">
      Ensino Profissional / Centro Qualifica
      <Icon icon="ic:round-open-in-new"/>
    </a>
  </section>
</article>