import style from '../src/App.module.css'


function App() {
  return (
    <>
      <header>
        <div className={style.rightHeader}>
          <p class="TitlesH1">Portifolio</p>
        </div>
        <nav  className={style.leftHeader}>
          <div className={style.buttonHeader}><a href="#aboutMe" class="TitlesH2">Sobre mim</a></div>
          <div className={style.buttonHeader}><a href="#Academic" class="TitlesH2">Formação academica</a></div>
          <div className={style.buttonHeader}><a href="#Skills" class="TitlesH2">Competencias</a></div>
          <div className={style.buttonHeader}><a href="#DisplayProjects" class="TitlesH2">Projetos</a></div>
        </nav>
      </header>
      <div className={style.mainPort}>
        <div className={style.aboutMe} id='aboutMe'>
            <div id="ImgaboutMe">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHp4mChGvdm8fvAYnfJZEPlsV8EzCGxhrUjQ&s" alt=""/>
            </div>
            <div>
                <h2 class="TitlesH2">Ola, sou Juan Diego</h2>
                <p className={style.TextaboutMe}>
                Atualmente, estou em uma jornada apaixonante no campo da Ciência da Computação, cursando a graduação nesta área e trabalhando ativamente na programação. Minha paixão por tecnologia se manifesta de diversas formas, desde a programação até a exploração de hardware e jogos.
                Sempre estive fascinado pelo mundo digital e suas infinitas possibilidades. No meu tempo livre, mergulho em jogos online e me dedico a projetos de programação, que me permitem explorar e desenvolver novas habilidades. O entusiasmo por tecnologia não é apenas um hobby, mas uma parte essencial da minha vida profissional e pessoal.
                Com uma formação em Ciência da Computação e uma carreira emergente na área de programação, estou constantemente em busca de novos desafios e oportunidades para crescer. Acredito que a tecnologia tem o poder de transformar o mundo e estou animado para contribuir com soluções inovadoras e criativas.
                </p>
            </div>
        </div>
      </div>
      <div className={style.mainPort}>
        <div className={style.aboutMe} id="AcademySkills">
          <div id="Academic">
              <div class="TitlesH2">Formação Academica</div>
              <details class="roboto-regular" open>
                  <summary>Cursando Ciência da Computação</summary>
                  <p>Início: 2023 | Conclusão prevista: 2027</p>
                  <p>Bacharelado em Ciência da Computação pela Universidade Positivo</p>
                  <p>Atualmente, estou cursando o Bacharelado em Ciência da Computação, onde tenho a oportunidade de aprofundar meus conhecimentos em diversas áreas da informática. O curso abrange uma ampla gama de disciplinas, incluindo programação nas linguagens C, Java e Assembly, e explora conceitos teóricos fundamentais como arquitetura de computadores, banco de dados e redes de computadores.</p>
                  <p>Além dos fundamentos técnicos, a formação também inclui estudos sobre algoritmos e estruturas de dados, sistemas operacionais e engenharia de software, proporcionando uma compreensão sólida dos princípios e práticas essenciais da área. A Universidade Positivo oferece uma abordagem prática e teórica, permitindo aplicar o conhecimento adquirido em projetos e atividades laboratoriais.</p>
              </details>
              <details class="roboto-regular">
                  <summary>Cursando Análise e Desenvolvimento de Sistemas</summary>
                  <p>Início: 2024 | Conclusão prevista: 2025</p>
                  <p>Técnico em Desenvolvimento de Sistemas pelo SENAI Celso Charuri</p>
                  <p>Atualmente estou cursando o Técnico em Desenvolvimento de Sistemas no SENAI Celso Charuri, um programa intensivo que visa proporcionar uma formação sólida e prática na área de tecnologia da informação. O curso oferece uma abordagem abrangente, com foco em desenvolvimento de software, onde estou adquirindo conhecimentos essenciais em linguagens de programação, desenvolvimento de aplicações e sistemas.</p>
                  <p>Além das competências técnicas em programação, o curso também aborda aspectos importantes da elétrica e da Internet das Coisas (IoT), permitindo-me desenvolver habilidades práticas em ambas as áreas. Isso inclui a configuração e manutenção de sistemas eletrônicos e a implementação de soluções integradas que conectam dispositivos físicos à rede, aprimorando a eficiência e funcionalidade dos sistemas desenvolvidos.</p>
                  <p>Durante o período do curso, estou envolvido em projetos práticos e atividades que facilitam a aplicação do conhecimento teórico, proporcionando uma experiência prática valiosa e preparando-me para os desafios do mercado de trabalho.</p>
              </details>
              <details class="roboto-regular">
                  <summary>Técnico em Informática</summary>
                  <p>Início: 2018 | Conclusão: 2022</p>
                  <p>Curso Técnico em Informática integrado ao Ensino Médio na Escola Estadual Pedro Macedo</p>
                  <p>Durante o período em que cursei o Técnico em Informática na Escola Estadual Pedro Macedo, obtive uma formação abrangente que combinou conhecimentos técnicos com a educação básica. O curso foi projetado para proporcionar uma base sólida em diversas áreas da informática, incluindo o desenvolvimento de habilidades práticas em hardware e lógica de programação.</p>
                  <p>Na área de hardware, adquiri experiência na montagem, manutenção e reparo de computadores, além de compreender o funcionamento dos componentes eletrônicos e periféricos. Em programação, aprendi os fundamentos da lógica de programação, que são essenciais para o desenvolvimento de algoritmos e resolução de problemas computacionais básicos.</p>
                  <p>O programa integrou teoria e prática, permitindo-me aplicar o conhecimento adquirido em projetos reais e atividades laboratoriais, o que contribuiu para o desenvolvimento de habilidades técnicas e de resolução de problemas.</p>
              </details>
          </div>
          <div id="Skills">
                <div class="TitlesH2">Competencias</div>
                <ul class="roboto-regular">
                    <li>
                        linguagens de programação:
                        <ul>
                            <li>C</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>MicroPython</li>
                            <li>JavaScript</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>VBA</li>
                            <li>SQL</li>
                            <li>Shell</li>
                            <li>Assembly</li>
                        </ul>
                    </li>
                    <li>Eletroeletrônica</li>
                    <li>Process Mapping</li>
                    <li>Ingles intermediario</li>
                    <li>Node.js</li>
                    <li>Mysql</li>
                    <li>SQL Server</li>
                    <li>IOT</li>
                    <li>Git</li>
                </ul>
            </div>  
        </div>
      </div>
    </>
  )
}

export default App
