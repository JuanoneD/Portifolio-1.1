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
      <main className={style.mainPort}>
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
      </main>
    </>
  )
}

export default App
