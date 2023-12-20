<script lang="ts">
  import PastaFicheiro from "$lib/components/pasta-ficheiro.svelte"
</script>

<svelte:head>
  <title>ESA - Documentos</title>
</svelte:head>

<article>
  <h1>Documentos</h1>
  <div class="grid grid-auto-fit items-start gap-4">
    <section>
      <h2>Alunos (Google Drive)</h2>
      <iframe
          title="Drive dos Documentos para os Alunos"
          src="https://drive.google.com/embeddedfolderview?id=1KTDXXtJHBvGd7amiElhou2zB1o_OXslh#grid"
      />
    </section>
    <section>
      <h2>Professores</h2>
      <div class="file-view grid">
        <PastaFicheiro
            href="https://docs.google.com/forms/d/e/1FAIpQLSeonTth2PRTbjE5LKc6DGTweCj7w1qqXC4uEPHPHfBon8SQNw/viewform"
            title="Sugestões Simplex"
        />
        <PastaFicheiro
            href="https://docs.google.com/forms/d/e/1FAIpQLScTOLF3Gc6ZA4FWfmrZOvKH5v7wPngsSm6jL1n9xankAiOh7A/viewform"
            title="Alterações no Programa Inovar"
        />
        <PastaFicheiro
            href="https://docs.google.com/forms/d/e/1FAIpQLScJiGVTT5hyTjYSoR2_pZFTMQMgUJnQcjRBxdZmknnf0XzqEQ/viewform"
            title="Comunicação de Anomalias"
        />
        <PastaFicheiro
            href="https://docs.google.com/forms/d/e/1FAIpQLSeFX29H2_fRgF6lQpa8WnNNYahXeaNuvlymiFiSUdJMueuZ0Q/viewform"
            title="Requisição de Necessidades"
        />
      </div>
    </section>
    <section>
      <h2>Geral</h2>
      <div class="file-view">
        <PastaFicheiro
            href="/documentos/projeto_educativo_2023-26.pdf"
            title="Projeto Educativo 2023-26"
        />
        <PastaFicheiro
            href="/documentos/reg_int_2023.pdf"
            title="Regulamento Interno 2023"
        />
        <PastaFicheiro
            href="/documentos/reg_prof_2023.pdf"
            title="Regulamento dos Cursos Profissionais"
        />
        <PastaFicheiro
            href="/documentos/reg_pap.pdf"
            title="Regulamento da Prova de Aptidão Profissional"
        />
        <PastaFicheiro
            href="/documentos/reg_fct.pdf"
            title="Regulamento da Formação em Contexto de Trabalho"
        />
        <PastaFicheiro
            href="/documentos/taxas_e_emolumentos.pdf"
            title="Preçário dos Serviços Administrativos da ESA"
        />
        <PastaFicheiro
            href="/documentos/plano_21_23_escola+.pdf"
            title="Plano 21|23 Escola+"
        />
        <PastaFicheiro
            href="/documentos/regulamento_e-mail.pdf"
            title="Regulamento do E-Mail"
        />
        <PastaFicheiro
            href="/documentos/estatuto_aluno.pdf"
            title="Novo Estatuto do Aluno"
        />
        <PastaFicheiro
            href="/documentos/justif_faltas.pdf"
            title="Documento para Justificação de Faltas"
        />
      </div>
    </section>
  </div>

</article>

<style lang="postcss">
  section {
    @apply bg-surface-900 p-4 !pt-0 rounded-xl;
  }

  h2 {
    @apply mt-4;
  }

  iframe {
    @apply bg-surface-800 rounded-md h-full min-h-[30rem] w-full;
  }
</style>
