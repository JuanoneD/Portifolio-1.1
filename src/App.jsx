import style from '../src/App.module.css'
import { useState } from 'react';



function App() {
  const defaultPhoneNumber = '5541991311559'
  const [message, setmessage] = useState('')

  const handleChange = (e) => {
    const {value} = e.target;
    setmessage(value);
  }

  const handleWhatsAppMessage = () => {
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Mensagem:%20${message}`;

    window.open(whatsappUrl, '_blank');
  }

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
      <div className={style.mainPort}>
        <div>
        <div class="TitlesH1"  id="DisplayProjects">Projetos</div>
        <div id="DisplayProjects">
            <div class="Project">
                <img src="https://www.ufsm.br/app/uploads/sites/791/2020/09/aplicacoesC3.jpg" alt=""/>
                <div class="textProject roboto-regular">
                    <div class="TitlesH2">Projeto de Estruturas de Dados</div>
                    <p>Projeto Com o Objetivo de fazer um Grafo, Com as informaçãoes do IMDB
                    O projeto foi feito na linguagem C, os filmes são salvos em array e suas arestas são feitas com listas encadiadas, as arestas são feitas por filmes que compartilham os mesmos atores. 
                    As principais abilidades desenvolvidas nesse projeto foi a criação de arrays dinamicos,listas encadiadas e dificuldade de manipular uma grande quantia de dados</p>
                    <a href="https://github.com/JuanoneD/Data-Structure-Project"><button class="roboto-regular">Detalhes</button></a>
                </div>
            </div>
            <div class="Project">
                <img src="https://media.licdn.com/dms/image/C4D12AQGrUMcxXVT_Uw/article-cover_image-shrink_600_2000/0/1576852745904?e=2147483647&v=beta&t=ORE4OIh_3puAkg6sItmAyRQxuGp3FbPOV_bcjCfEXxk" alt=""/>
                <div class="textProject roboto-regular">
                    <div class="TitlesH2">Greenhill Collections</div>
                    <p>Este projeto foi desenvolvido em Java com o objetivo de criar e implementar diversas estruturas de dados, incluindo Hash, lista encadeada, array dinâmico, fila e pilha, além de construir iteradores para essas estruturas e utilizar Streams. Durante o desenvolvimento, aperfeiçoei minhas habilidades em Java e trabalho em equipe, e também adquiri um entendimento mais profundo sobre iteração e Streams.</p>
                    <a href="https://github.com/JuanoneD/Java/tree/main/05/dia_16/greenhill/collections"><button class="roboto-regular">Detalhes</button></a>
                </div>
            </div>
            <div class="Project">
                <img src="https://idocode.com.br/wp-content/uploads/2020/04/aprender-programar-linguagem-c.jpg" alt=""/>
                <div class="textProject roboto-regular">
                    <div class="TitlesH2">Sistema Gestao Empresa</div>
                    <p>Projeto realizado na materia logica de programação no Senai, Feito em grupo, em C  com intuido de fazer um sistema para gerenciar finanças e estoque de uma empresa<br/>
                        O base para o projeto foi um problema real de um pequena empresa e para o desenvolvimento do projeto foi um trabalhado onde melhorei minhas habilidades de trabalhar em grupo e as ferramentas que o git apresenta para fazer trabalhos em grupo
                    </p>
                    <a href="https://github.com/JuanoneD/Sistema_Gestao_Empresa.git"><button class="roboto-regular">Detalhes</button></a>
                </div>
            </div>
            <div class="Project">
                <img src="https://www.investopedia.com/thmb/C7s8G-f9rvaIji0H6JqZgbBNQVo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/assemblylanguage-356836be12ae4723bbbd8e3b6e543b9f.JPG" alt=""/>
                <div class="textProject roboto-regular">
                    <div class="TitlesH2">Simulando comandos em Assembly com C</div>
                    <p>Projeto realizado na materia de Arquitetura de computadores no Faculdade, Feito em C, onde o objetivo era de desmostrar como um processador funciona quando é envia um instrução<br/>
                    Para realizar o trabalho foi necessario um conhecimento amplo sobre o funcionamento de um processador, como as instruções são traduzidas, e como funciona o a linguagem Assembly Mips
                    </p>
                    <a href="https://github.com/JuanoneD/Assembly_commands_on_C.git"><button class="roboto-regular">Detalhes</button></a>
                </div>
            </div>
        </div>
        </div>
      </div>

      <div className={style.mainPort}>
        <div class="TitlesH2">
        <label htmlFor="message">Mensagem</label>
        <textarea id='message' name='message' value={message} onChange={handleChange} required style={{width:'100%'}}></textarea>
        <button onClick={handleWhatsAppMessage} className={style.button}>Enviar mensagem</button>

        </div>
      </div>


      <footer>
        <div id="rigthfooter">
            <img src="https://cdn-icons-png.flaticon.com/512/7083/7083836.png" alt=""/>
            <div class="Contact">
                <p class="roboto-regular">JuanDiego.jd42@gmail.com</p>
            </div>
        </div>
        <div id="leftfooter">
            <div class="Contact">
                <a href="https://br.linkedin.com/"><img src="https://www.gov.br/observatorio/en/academic-programs/graduate-program-in-geophysics/images/linkedin.png" alt=""/></a>
            </div>
            <div class="Contact">
                <a href="https://github.com/JuanoneD"><img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w600-h300-pc0xffffff-pd" alt=""/></a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
