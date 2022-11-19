import './App.scss'
import { Beneficios } from './components/Beneficios'
import { Clientes } from './components/Clientes'
import { Depoimentos } from './components/Depoimentos'
import Header from './components/Header'
import { Home } from './components/home'
import { Solucoes } from './components/Solucoes'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Beneficios />
      <Solucoes />
      <Clientes />
      <Depoimentos />
    </>
  )
}

export default App
