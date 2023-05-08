import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar';
import QuemSomos from './pages/QuemSomos';
import Footer from './components/Footer';
import Principal from './pages/Principal';

function App() {
  return (
    <div className="App">
      <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
