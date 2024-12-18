import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"
import styles from "./Contatos.module.css"
import { IoMdMail } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";   
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contatos(){
    return (
        <>
        <Header/>
        <Container>
            <section className={styles.contatos}>
                 <h2>Contatos</h2>
                 <h3>Entre em contato</h3>
                 <p>Para que possamos conversar mais sobre.</p>
                 <div className={styles.icones}>

                      <a href="mailto:maldoguinho18@gmail.com" target="_blank" rel="noopener noreferrer">
                          <IoMdMail className={styles.icone}/> 
                      </a>

                      <a href="https://www.instagram.com/luanrodrigues.01/" target="_blank" rel="noopener noreferrer">
                          <GrInstagram className={styles.icone}/> 
                      </a>

                      <a href="https://www.youtube.com/@doguinhomal3498" target="_blank" rel="noopener noreferrer">
                          <BsYoutube className={styles.icone}/> 
                      </a>

                      <a href="https://github.com/LuanRodrigues0" target="_blank" rel="noopener noreferrer">
                          <FaGithub className={styles.icone}/>
                      </a>

                      <a href="https://www.linkedin.com/in/luan-rodrigues-a16644321/" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className={styles.icone}/>
                      </a>
                 </div>
            </section>
        </Container>
        <Footer/>
        
        
        </>
    )
}

export default Contatos