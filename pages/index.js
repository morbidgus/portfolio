import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gustavo Madrid Web Dev
        </title>
        <link rel="icon" href="/pageicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>

        <div className={styles.herocontainer}>
          <div className={styles.hero}>
            <h2 className={styles.hi}>Hi! I'm <span>Gustavo</span>, Front-End Web Developer based in Argentina.</h2>
            <img src="../hero.svg" className={styles.heroillu}/>
          </div>

          <img src="../mouse.svg" className={styles.mouse} />
        
        </div>

        <h1 className={styles.projects}>&lt;projects&gt;</h1>

        <div className={styles.projectscontainer}>
          <h1 className={styles.foundittitle}>Found it!</h1>
          <div className={styles.founditproject}>
            <img src="../foundit.png" className={styles.projectposter}/>
            <div className={styles.founditbuttons}>
              <a href="https://github.com/morbidgus/foundit" rel="noreferrer" target="_blank" className={styles.button}>View code</a>
              <a href="https://foundit.vercel.app/" rel="noreferrer" target="_blank" className={styles.button}>View project</a>
            </div>

          </div>
            <p className={styles.founditdescription}>Responsive Next.js web application that uses TMDb API to get the movie data. This app
             presents the ability to search a title and get details about the selected movie</p>
             <p className={styles.founditdescription}>Technologies used:</p>
             <p className={styles.founditdescription}>Html, Css, Next.js, Git, Node and Figma</p>



          <h1 className={styles.foundittitle}>Athena</h1>
          <div className={styles.founditproject}>
            <img src="../athena.png" className={styles.projectposter}/>
            <div className={styles.founditbuttons}>
            <a href="https://github.com/morbidgus/Athena" rel="noreferrer" target="_blank" className={styles.button}>View code</a>
            <a href="https://pedantic-yonath-561489.netlify.app/" rel="noreferrer" target="_blank" className={styles.button}>View project</a>
            </div>

          </div>
            <p className={styles.founditdescription}>Responsive Vanilla Js web application. This app presents the ability to access a collection of
             amazing free resources for web developers.</p>
             <p className={styles.founditdescription}>Technologies used:</p>
             <p className={styles.founditdescription}>Html, Css, Vanilla JavaScript, Git and Figma</p>
        </div>

        <h1 className={styles.aboutme}>&lt;about me&gt;</h1>

        <p className={styles.about}>Hi! My name is Gustavo Madrid. I'm a 23 y/o living in Buenos Aires, Argentina. I've discovered
          web development in 2019 and been learning it by myself ever since. I believe anything can be overcome with persistence and dedication. I'm always up for learning new things!
        </p>

        <h1 className={styles.skills}>&lt;skills&gt;</h1>

        <div className={styles.skillscontainer}>
          <div className={styles.skill}>
            <img src="./html.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>HTML</h1>
          </div>
          <div className={styles.skill}>
            <img src="./css.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>CSS</h1>
          </div>
          <div className={styles.skill}>
            <img src="./js.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>JAVASCRIPT</h1>
          </div>
          <div className={styles.skill}>
            <img src="./figma.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>FIGMA</h1>
          </div>
          <div className={styles.skill}>
            <img src="./github.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>GITHUB</h1>
          </div>
          <div className={styles.skill}>
            <img src="./ai.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>ILLUSTRATOR</h1>
          </div>
          <div className={styles.skill}>
            <img src="./ps.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>PHOTOSHOP</h1>
          </div>
          <div className={styles.skill}>
            <img src="./node.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>NODE(NPM)</h1>
          </div>
          <div className={styles.skill}>
            <img src="./git.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>GIT</h1>
          </div>
          <div className={styles.skill}>
            <h1 className={styles.more}>MORE COMING SOON...</h1>
          </div>
        </div>  

        <h1 className={styles.contact}>&lt;contact&gt;</h1>

        <p className={styles.hireme}>Lets build something great</p>

        <div className={styles.contacts}>
          <a href="https://github.com/morbidgus" target="_blank">
          <img src="./githublack.svg" className={styles.social}/>
          </a>
          <a href="https://www.instagram.com/guuss_m/" target="_blank">
          <img src="./instagram.svg" className={styles.social}/>
          </a>
        
        </div>

        <p className={styles.email}>madridgustavo23@gmail.com</p>
      </main>
    </div>
  )
}
