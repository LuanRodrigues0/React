import {Link} from 'react-router-dom'
import styles from './Home.module.css'

function Home(){
    return(
        
      
         <section className={styles.home}>
            <div className={styles.apresentacao}>
               <p>
               olá, sou <br/>
               <span>Luan Rodrigues</span> <br />
                  Desenvolvedor Web
               </p>
               <Link to="/sobre"><button className={`${styles.btn} ${styles.btn_blue} ${styles.btn_blue_hover}`}>Saiba mais</button></Link>
            </div>
            <figure>
            <img className={styles.img_home} src="/developer-blue.svg" alt="imagem-home" />
            </figure>
         </section>
      
    
    )
}

export default Home