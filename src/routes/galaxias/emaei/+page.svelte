<script lang="ts">
  import OpenInNew from "$lib/components/openInNew.svelte"
  import {handleAnchorClick} from "$lib";
</script>

<svelte:head>
  <title>EMAEI</title>
</svelte:head>

<article>
  <section class="prose">
    <h1>EMAEI</h1>
    <h2>Equipa Multidisciplinar de Apoio à Educação Inclusiva</h2>
    <p>
      A EMAEI, pela natureza do seu objeto (Dec. Lei n.º 54/2018, de 6 de julho), potencia o reconhecimento da
      mais-valia que é a diversidade dos alunos da Escola, encontrando formas de lidar com essa diferença, adequando os
      processos de ensino às características e condições individuais de cada aluno, mobilizando os meios de que a Escola
      dispõe para que todos aprendam e participem na vida da comunidade educativa. Esta estrutura apoia os conselhos de
      turma na identificação das barreiras à aprendizagem com que o aluno se confronta, propondo estratégias para as
      ultrapassar, de modo a assegurar que cada aluno tenha acesso ao currículo e às Aprendizagens Essenciais de cada
      disciplina, potenciando em todos e em cada um o desenvolvimento do Perfil dos Alunos à Saída da Escolaridade
      Obrigatória.
    </p>
    <p>
      A Equipa Multidisciplinar de Apoio à Educação Inclusiva (EMAEI) constitui um recurso organizacional específico de
      apoio à aprendizagem, tendo em vista uma leitura alargada, integrada e participada de todos os intervenientes no
      processo educativo.
    </p>
  </section>
  <hr>
  <section class="prose mb-5">
    <div class="flex grid-auto-fit grid-material-group" style="--size: 1/3;">
      <a class="inline-indice" href="#constituicao" on:click={handleAnchorClick}>Constituição da EMAEI</a>
      <a class="inline-indice" href="#competencias" on:click={handleAnchorClick}>Competências da EMAEI</a>
      <a class="inline-indice" href="#documentos" on:click={handleAnchorClick}>Documentos de Apoio</a>
    </div>
  </section>
  <hr>
  <section class="prose">
    <h2 id="constituicao">Constituição da EMAEI</h2>
    <h3>1 - Elementos permanentes:</h3>
    <ol>
      <li>
        Um dos docentes que coadjuva o Diretor e que, na ausência deste, por motivos de impedimento legais, o
        substituirá - Teresa Lopes (adjunta);
      </li>
      <li>Coordenadora do Departamento de Apoio e Orientação Educativa - Maria Antónia Gil;</li>
      <li>Um docente de Educação Especial - Teresa Lopes;</li>
      <li>
        Três membros do Conselho Pedagógico com funções de Coordenação Pedagógica de diferentes níveis de educação e
        ensino:
        <ul>
          <li>Coordenadora dos Diretores de Turma do 3.º Ciclo – Teresa Mafalda Alves</li>
          <li>Coordenadora dos Diretores de Turma do Ensino Secundário Regular – Fernanda Capela</li>
          <li>Coordenador dos Diretores de Turma dos Cursos Profissionais – Abílio Mendes</li>
        </ul>
      </li>
      <li>Um Psicólogo do Serviço de Psicologia e Orientação da escola – Vera Melo</li>
    </ol>

    <h3>2 - Elementos variáveis:</h3>
    <ol>
      <li>O Diretor de Turma e outros docentes do aluno;</li>
      <li>Assistentes operacionais;</li>
      <li>Assistentes Sociais;</li>
      <li>Técnicos que intervêm com o aluno;</li>
      <li>Pais ou Encarregados de Educação.</li>
    </ol>

    <h2 id="competencias">Competências da EMAEI</h2>
    <ul>
      <li>Sensibilizar a comunidade educativa para a educação inclusiva;</li>
      <li>Propor as medidas de suporte à aprendizagem a mobilizar;</li>
      <li>Acompanhar e monitorizar a aplicação das medidas de suporte à aprendizagem;</li>
      <li>Prestar aconselhamento aos docentes na implementação de práticas pedagógicas inclusivas;</li>
      <li>
        Elaborar o Relatório Técnico - Pedagógico, previsto no artigo 21º e, se aplicável, o Programa Educativo
        Individual e Plano Individual de Transição previstos, respetivamente, nos artigos 24º e 25º;
      </li>
      <li>Acompanhar o funcionamento do Centro de Apoio à Aprendizagem;</li>
      <li>Solicitar mais informações ou documentos junto do responsável pela referenciação, sempre que necessário.</li>
    </ul>

    <h2 id="documentos">Documentos de Apoio</h2>
    <OpenInNew title="Decreto-lei n.º 54/2018 de 6 de julho"
               href="/universo-esa/galaxias/emaei/dl_54_2018_6_julho.pdf"/>
    <OpenInNew title="Decreto-lei n.º 55/2018 de 6 de julho"
               href="/universo-esa/galaxias/emaei/dl_55_2018_6_julho.pdf"/>
    <OpenInNew title="Lei n.º 116/2019 de 13 de setembro"
               href="/universo-esa/galaxia/emaei/lei_116_2019_13_setembro.pdf"/>
    <OpenInNew title="Manual de Apoio à Prática"
               href="/universo-esa/galaxia/emaei/manual_apoio_pratica.pdf"/>
    <OpenInNew title="Regimento da Equipa EMAEI"
               href="/universo-esa/galaxia/emaei/reg_emai_2022-2023.pdf"/>
    <OpenInNew title="Documento de Identificação de Necessidades"
               href="/universo-esa/galaxia/emaei/doc _ident_neces.pdf"/>
    <OpenInNew title="Documento de identificação de necessidades - Parecer"
               href="/universo-esa/galaxia/emaei/doc_ident_neces_parecer.pdf"/>
    <OpenInNew title="Adaptações Curriculares Não Significativas"
               href="/universo-esa/galaxia/emaei/adap_curric_nao_signif.pdf"/>
    <OpenInNew title="Adaptações Curriculares Significativas"
               href="/universo-esa/galaxia/emaei/adap_ curric_signif.pdf"/>
    <OpenInNew title="Guião de Apoio Educação Inclusiva"
               href="/universo-esa/galaxia/emaei/guiao_apoio_educa_inclusiva_emai2022-2023.pdf"/>
    <OpenInNew title="Implementação e Monitorização de Medidas e de Avaliação"
               href="/universo-esa/galaxia/emaei/impl_monit_adapt_proces_avaliacao.pdf"/>
    <OpenInNew title="PEI - Programa Educativo Individual"
               href="/universo-esa/galaxia/emaei/pei_progr_educat_indiv.pdf"/>
    <OpenInNew title="Perfil dos alunos à saída da escolaridade obrigatória"
               href="/universo-esa/galaxia/emaei/perfil_alun_saida_escolar_ obrig.pdf"/>
    <OpenInNew title="PIT - Plano Individual de Transição"
               href="/universo-esa/galaxia/emaei/pit_pi_indiv_trans.pdf"/>
    <OpenInNew title="RTP- Relatório Técnico -Pedagógico"
               href="/universo-esa/galaxia/emaei/rtp_relat_tecn_pedag.pdf"/>
    <OpenInNew title="Regimento do CAA"
               href="/universo-esa/galaxia/emaei/regim_caa_2022-2023.pdf"/>
  </section>
</article>

<style lang="postcss">
  hr {
    @apply max-w-[80ch] opacity-20
  }

  .inline-indice {
    @apply bg-accent-700 text-center text-headings-dark p-4 w-1/3 no-underline hover:underline hover:bg-surface-700
  }

  ol, ul {
    @apply pl-4
  }

  ol > li {
    list-style-type: lower-alpha;
  }
</style>