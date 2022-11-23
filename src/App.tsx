import './App.scss'
import { Beneficios } from './components/Beneficios'
import { Clientes } from './components/Clientes'
import { Contato } from './components/Contato'
import { Depoimentos } from './components/Depoimentos'
import { Home } from './components/home'
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

