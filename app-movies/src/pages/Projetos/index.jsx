import { useState } from "react"
import Card from "../../components/Card"
import styles from './Projetos.module.css'
import { useEffect } from "react"

function Projetos(){
    
    const [repositores, setRepositories] = useState([])

    useEffect(()=>{
         const buscarRepositorio = async () =>{
           const response = await fetch ("https://api.github.com/users/LuanRodrigues0/repos")
           const data = await response.json() 
           setRepositories(data)

         }
         buscarRepositorio()

    },[])
    
    return (
        <section className={styles.projetos}>
       
         <h2>Projetos</h2>
          {
            repositores.length > 0 ? (
                <section className={styles.lista}>
                  {
                     repositores.map((repo) =>(
                        <Card name={repo.name}/>
                     ))
                  }
                
                 </section>
            ) :(
                <p>Carregando repositórios...</p>
            )
          }

        </section>
    )
}

export default Projetos