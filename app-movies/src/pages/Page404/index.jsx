
import style from "./Page404.module.css"

function Page404(){
     return(
        <>
             
         <h2 className={style.titulo2}>Algo de errado não está certo!</h2>
         <div className={style.textos}>
            <span className={style.texto_grande}>404</span> <br/>
            <strong className={style.texto_cor}>Página não pode ser encontrada!</strong>
      
         </div>
   
        </>
     )

}

export default Page404