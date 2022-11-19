import './App.scss'
import { Beneficios } from './components/Beneficios'
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
    </>
  )
}

export default App
