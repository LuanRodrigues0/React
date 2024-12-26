import styles from './Sobre.module.css'
import eu2 from './images/eu2.jpg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import node from './images/icon-node.svg'
import react from './images/icon-react.svg'
import mysql from './images/mysql-official.svg'


function Sobre(){
    return (
       <section className={styles.sobre}>
           <div className={styles.bio}> 
              <img src={eu2} alt="avatar" className={styles.avatar} />
              <div className={styles.biografia}>
                 <h2>Sobre</h2>
                 <p>Sou <span>Luan Rodrigues</span> <br />
                 <strong>Dev Junior</strong></p>

               <p>Trabalho com desenvolvimento Web desde 2023.</p>

               <p>Sou apaixonado por transformar ideias em realidade digital.</p>

               <p>
                  Especializado em criação de aplicações dinâmicas e intuitivas,<br />

                  com foco na experiência do usuário.
               </p>
              </div>
           </div> 
           <div className={styles.techs}>
               <h3>Techs</h3>

               <div className={styles.icons}>
             <img src={html} alt="ícone do html"/>
              <img src={css} alt="ícone do css"/>
              <img src={js} alt="ícone do JavaScript"/>
              <img src={node} alt="ícone do Node"/>
              <img src={react} alt="ícone do React"/>
              <img src={mysql} alt="ícone do sql"/>
               </div>
           </div>
       </section>
    )
}

export default Sobre