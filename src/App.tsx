import './App.scss'
import { Beneficios } from './components/Beneficios'
import { Clientes } from './components/Clientes'
import { Contato } from './components/Contato'
import { Depoimentos } from './components/Depoimentos'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Home } from './components/Home'
import { Solucoes } from './components/Solucoes'

function App() {


  return (
    <>

      <Home />
      <Beneficios />
      <Solucoes />
      <Clientes />
      <Depoimentos />
      <Contato />

    </>
  )
}

export default App

