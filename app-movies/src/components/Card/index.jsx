import style from './Card.module.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { LuSquareArrowRight } from "react-icons/lu";


// eslint-disable-next-line react/prop-types
function Card({name, description, html_url}) {
    return(
       <section className={style.card}>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className={style.card_footer}>
               <div className={style.card_icones}>
                   <FaHtml5 />
                   <FaCss3Alt />
                   <IoLogoJavascript />
                   <FaReact />
                  
               </div>
               <a href={html_url} target='_blank' rel='noopenner norefferer' className={style.card_botao}>
                  <LuSquareArrowRight />
               </a>
          </div>

       </section>  
    )
}

export default Card