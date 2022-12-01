import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Footer } from './components/Footer'
import Header from './components/Header'
import './index.scss'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QuemSomos } from './components/QuemSomos'
import { SaibaMais } from './components/SaibaMais'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/SaibaMais" element={<SaibaMais />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
