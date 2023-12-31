<script lang="ts">
  import OpenInNew from "$lib/components/openInNew.svelte"
  import Noticia from "$lib/components/noticia.svelte"
</script>

<svelte:head>
  <title>ESA - Eco-Escolas</title>
</svelte:head>

<article>
  <section class="prose">
    <h1>Eco-Escolas</h1>
    <img src="/universo-esa/galaxias/eco-escolas/logo_eco.png" alt="Logo Eco-Escolas"/>
    <h2>Hino</h2>
    <audio controls>
      <source src="/universo-esa/galaxias/eco-escolas/hino-canivetes.mp3" type="audio/mpeg">
    </audio>
  </section>
  <section class="prose">
    <h2>Equipa do Programa Eco-Escolas na Escola Secundária de Amarante</h2>
    <p>
      O Programa Eco-Escola está vocacionado para a educação ambiental e para a cidadania, que a Fundação para a
      Educação Ambiental (FEE), implementa em vários países da Europa desde o início dos anos 90.
    </p>
    <p>
      Está a ser implementado em Portugal pela Associação Bandeira Azul da Europa, desde o ano letivo 1996/97. Tem como
      objetivos, encorajar ações e reconhecendo o trabalho desenvolvido pela Escola em benefício do ambiente, visando a
      aplicação de conceitos e ideias de educação e gestão ambiental à vida quotidiana da escola. As ações concretas
      desenvolvidas pelos alunos e por toda a comunidade educativa, visam a tomada de consciência de que simples
      atitudes individuais podem, no seu conjunto, melhorar o Ambiente global.
    </p>
    <p>
      Este esforço é reconhecido através da atribuição de uma Bandeira Verde, que certifica a existência, na escola, de
      uma educação ambiental coerente e de qualidade.
    </p>
    <p>
      O Galardão Bandeira Verde é um certificado de qualidade ambiental da escola. Não é um prémio monetário mas um
      prémio de reconhecimento público da existência, naquela escola, de uma educação pelo ambiente. O Galardão consiste
      em:
    </p>
    <ul>
      <li>Bandeira que poderá ser colocada no átrio da escola ou hasteada num mastro.</li>
      <li>Certificado de Eco-Escola.</li>
      <li>Autorização de utilização do logótipo das Eco-Escolas.</li>
    </ul>
    <p>
      Identificação da Equipa de docentes da Escola Secundária de Amarante:
    </p>
    <ul>
      <li>Professora Anabela Pinto - Coordenadora do projeto</li>
      <li>Professor Filipe Lima - Subcoordenador</li>
    </ul>
  </section>
  <section class="prose">
    <h2>Documentação</h2>
    <OpenInNew title="Auditoria Ambiental" href="/universo-esa/galaxias/eco-escolas/auditoria_ambiental.pdf"/>
    <OpenInNew title="Regulamento Programa Eco-Escolas"
               href="/universo-esa/galaxias/eco-escolas/Regulamento_Eco_Escolas_1.pdf"/>
    <OpenInNew title="Site Oficial do Programa Eco-Escolas" href="https://ecoescolas.abaae.pt/"/>
  </section>
  <hr>
  <section class="prose breakout">
    <h2>Notícias</h2>
    <div class="grid grid-auto-fit grid-material-group">
      <Noticia image="/universo-esa/galaxias/eco-escolas/noticias/reuniao-alunos.jpg" openInNew={false}
               title="Reunião Eco-Escolas com alunos" date="02/2022" link="#reuniao-alunos" description=""/>
      <Noticia image="/universo-esa/galaxias/eco-escolas/noticias/reuniao-entidades.jpg" openInNew={false}
               title="Reunião Eco-Escolas com alunos" date="02/2022" link="#reuniao-entidades" description=""/>
      <Noticia image="/universo-esa/galaxias/eco-escolas/noticias/alunos-plantam.jpg"
               title="Alunos em Amarante Plantam árvores no Marão" description="Reportagem Novum Canal"
               date="14/02/2023"
               link="https://novumcanal.pt/2023/02/amarante/c-video-alunos-de-amarante-plantam-arvores-no-marao/"/>
      <Noticia title="ESA sensabiliza alunos para 'flagelo dos incêndios'" date="11/02/2023"
               description="Entrevista da Diretora Ana Cristina Santos - Jornal A Verdade"
               image="https://i0.wp.com/averdade.com/wp-content/uploads/2023/02/diretora-escola-secundaria-amarante.jpg?w=1500&ssl=1"
               link="https://averdade.com/escola-secundaria-de-amarante-sensibiliza-alunos-para-o-flagelo-dos-incendios/"/>
    </div>
  </section>
  <section id="reuniao-alunos" class="prose breakout">
    <h2>Reunião Eco-escolas com alunos</h2>
    <div class="image-inline">
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-alunos.jpg"
           alt="Reunião Eco-Escolas com alunos, vista dos alunos" class="w-1/3"/>
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-alunos-2.jpg"
           alt="Reunião Eco-Escolas com alunos, vista do fundo dos alunos" class="w-1/3"/>
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-alunos-3.jpg"
           alt="Reunião Eco-Escolas com alunos, vista da apresentadora" class="w-1/3"/>
    </div>
  </section>
  <section id="reuniao-entidades" class="prose breakout">
    <h2>Reunião Eco-escolas com entidades</h2>
    <div class="image-inline">
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-entidades.jpg"
           alt="Reunião Eco-Escolas com entidades" class="w-1/3"/>
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-entidades-2.jpg"
           alt="Reunião Eco-Escolas com alunos" class="w-1/3"/>
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-entidades-3.jpg"
           alt="Reunião Eco-Escolas com entidades" class="w-1/3"/>
    </div>
    <div class="image-inline">
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-entidades-4.jpg"
           alt="Reunião Eco-Escolas com entidades" class="w-1/3"/>
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-entidades-5.jpg"
           alt="Reunião Eco-Escolas com alunos" class="w-1/3"/>
      <img src="/universo-esa/galaxias/eco-escolas/noticias/reuniao-entidades-6.jpg"
           alt="Reunião Eco-Escolas com entidades" class="w-1/3"/>
    </div>
  </section>
</article>