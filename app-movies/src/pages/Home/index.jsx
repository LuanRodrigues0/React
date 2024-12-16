import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Home.module.css'

function Home(){
    return(
        <>
      <Header/>
      <Container>
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
      </Container>
      <Footer/>
    </>
    )
}

export default Home