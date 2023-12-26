<script lang="ts">
  import {handleAnchorClick} from "$lib";
</script>

<article>
  <section class="prose">
    <h1>IDEIA.pt</h1>
    <h2>Gabinete IDEIA.pt (Inclusão, Desenvolvimento, Educação, Inovação e Adaptabilidade para todos)</h2>
    <p>
      O gabinete IDEIA.pt insere-se no Departamento de Apoio e Orientação Educativa (DAOE) e tem como filosofia “Uma
      Escola para Todos e com Todos”.
      <br>
      É um projeto que tem como objetivo a promoção do sucesso educativo e a plena integração escolar dos alunos e a sua
      orientação vocacional, tendo em conta os direitos e deveres dos alunos, conjugando a sua atividade com as demais
      estruturas de orientação educativa. Pretende contribuir para o desenvolvimento harmonioso e global dos
      adolescentes e jovens através de uma articulação entre a escola, a família e a comunidade, no que diz respeito a
      situações de risco como o abandono, o absentismo, o insucesso escolar e a adoção de comportamentos de risco.
      <br>
      Tem como missão capacitar a comunidade escolar numa gestão de conflitos mais assertiva e eficaz, promovendo uma
      melhor comunicação entre todos e relações interpessoais mais satisfatórias.
      <br>
      O gabinete IDEIA.pt é constituído por uma equipa de docentes que colabora com as demais estruturas da escola,
      entidades do concelho e é orientado pelo professor do grupo 300, João A. D. Lopes.
    </p>
  </section>
  <hr>
  <section class="prose mb-5">
    <div class="flex grid-auto-fit grid-material-group" style="--size: 1/3;">
      <a class="inline-indice" href="#funcionamento" on:click={handleAnchorClick}>Funcionamento</a>
      <a class="inline-indice" href="#principios" on:click={handleAnchorClick}>Príncipios Orientadores</a>
      <a class="inline-indice" href="#competencias" on:click={handleAnchorClick}>Competências</a>
    </div>
  </section>
  <hr>
  <section class="prose">
    <h2 id="funcionamento">Funcionamento</h2>
    <p>
      O gabinete IDEIA.pt desenvolve a sua atividade de acordo com um plano anual de atividades que se integra no plano
      anual de atividades da escola.
      <br>
      O gabinete encontra-se aberto diariamente e localiza-se no bloco central; fora do horário de funcionamento do
      gabinete IDEIA.pt, as ocorrências devem ser encaminhadas para os Serviços de Psicologia e Orientação (SPO) ou para
      a
      Direção da Escola.
    </p>

    <h2 id="principios">Princípios Orientadores</h2>
    <ul>
      <li>A mediação de conflitos entre alunos, entre alunos e professores e alunos e funcionários;</li>
      <li>O combate ao abandono, ao absentismo e ao insucesso escolar;</li>
      <li>A identificação, encaminhamento, prevenção e resolução de comportamentos de risco;</li>
      <li>Outras situações que privam os alunos dos seus direitos.</li>
    </ul>

    <h2 id="competencias">Competências</h2>
    <ul>
      <li>Apoiar alunos e famílias nas suas problemáticas;</li>
      <li>Promover: a integração dos alunos na Escola; o desenvolvimento de competências pessoais e sociais do aluno; o
        envolvimento dos pais e encarregados de educação no percurso de vida do jovem; a inter-relação entre os
        diferentes intervenientes família/escola/comunidade como agentes participantes no processo de desenvolvimento
        socioeducativo;
      </li>
      <li>
        Prevenir/diminuir situações de risco, violência, absentismo e de abandono escolar reforçando os fatores
        sociais de proteção;
      </li>
      <li>
        Contribuir para: o sucesso escolar e pessoal dos alunos; a reflexão e concretização do projeto de vida do jovem
        tendo em consideração as suas necessidades e potencialidades;
      </li>
      <li>Participar e colaborar com a Rede de Apoio Social local;</li>
      <li>
        Prevenir as situações de indisciplina e contribuir para a redução dos casos de indisciplina em sala de aula;
      </li>
      <li>Combater o absentismo.</li>
    </ul>
  </section>
</article>

<style lang="postcss">
  hr {
    @apply max-w-[80ch]
  }

  .inline-indice {
    @apply bg-accent-700 text-center text-headings-dark p-4 w-1/3 no-underline hover:underline hover:bg-surface-700
  }
</style>