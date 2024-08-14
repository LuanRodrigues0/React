
import './App.css'
import Footer from './components/Footer'
import Header from './components/header'

function App() {
  

  return (
    <>
      <Header/>
      <section className='container'>
         <div className='apresentacao'>
            <p>
              olá, sou <br/>
              <span>Luan Rodrigues</span> <br />
               Desenvolvedor Web
            </p>
            <button className='btn btn-blue'>Saiba mais</button>
         </div>
         <figure>
          <img className='img-home' src="/developer-blue.svg" alt="imagem-home" />
         </figure>
      </section>
      <Footer/>
    </>
  )
}

export default App
