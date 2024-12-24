import styles from './Sobre.module.css'
import eu from './images/eu.png'

function Sobre(){
    return (
       <section className={styles.Sobre}>
           <div className={styles.bio}> 
              <img src={eu} alt="avatar" className={styles.avatar} />
              <div>
                 <h2>Sobre</h2>
              </div>
           </div> 
           <div className={styles.techs}>
              <h3>Techs</h3>
              images
           </div>
       </section>
    )
}

export default Sobre