import style from './Card.module.css'

function Card() {
    return(
       <section className={style.card}>
          <h3>Título do projeto</h3>
          <p>Texto descritivo do projeto</p>
          <div className={style.card_footer}>
               <div className={style.card_icones}>
                       HTML
               </div>
               <button className={style.card_botao}>
                   seta
               </button>
          </div>

       </section>  
    )
}

export default Card