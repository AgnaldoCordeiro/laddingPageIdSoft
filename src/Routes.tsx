import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beneficios from './components/Beneficios';
import Solucoes from './components/Solucoes';
import Contato from './components/Contato';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Beneficios />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
};

export default App;
