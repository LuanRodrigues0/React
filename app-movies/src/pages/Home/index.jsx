import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home(){
    return(
        <>
      <Header/>
      <section className='container'>
         <div className='apresentacao'>
            <p>
              olá, sou <br/>
              <span>Luan Rodrigues</span> <br />
               Desenvolvedor Web
            </p>
            <Link to="/sobre"><button className='btn btn-blue'>Saiba mais</button></Link>
         </div>
         <figure>
          <img className='img-home' src="/developer-blue.svg" alt="imagem-home" />
         </figure>
      </section>
      <Footer/>
    </>
    )
}

export default Home