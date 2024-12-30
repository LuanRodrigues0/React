import style from './Card.module.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { LuSquareArrowRight } from "react-icons/lu";

function Card() {
    return(
       <section className={style.card}>
          <h3>Título do projeto</h3>
          <p>Texto descritivo do projeto.</p>
          <div className={style.card_footer}>
               <div className={style.card_icones}>
                   <FaHtml5 />
                   <FaCss3Alt />
                   <IoLogoJavascript />
                   <FaReact />
                  
               </div>
               <button className={style.card_botao}>
                  <LuSquareArrowRight />
               </button>
          </div>

       </section>  
    )
}

export default Card