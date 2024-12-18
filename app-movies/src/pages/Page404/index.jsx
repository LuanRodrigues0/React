import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import style from "./Page404.module.css"

function Page404(){
     return(
        <>
        <Header/>
        <Container>
             <h2 className={style.titulo2}>Algo de errado não está certo!</h2>
             <div className={style.textos}>
                 <span className={style.texto_grande}>404</span> <br/>
                 <strong className={style.texto_cor}>Página não pode ser encontrada!</strong>
            
              </div>
        </Container>
        <Footer/>
        </>
     )

}

export default Page404