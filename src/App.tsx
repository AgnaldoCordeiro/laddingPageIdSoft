import './App.module.scss'
import { Beneficios } from './components/Beneficios'
import { Contato } from './components/Contato'
import { Depoimentos } from './components/Depoimentos'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Home } from './components/home'
import { Solucoes } from './components/Solucoes'
import styles from './styles.module.scss'

function App() {


  return (
    <div className={styles.container} >
     <Header />
      <Home />
      <Beneficios />
      <Solucoes id="solucoes" />
      {/* <Depoimentos /> */}
      <Contato />
      <Footer /> 

    </div>
  )
}

export default App

