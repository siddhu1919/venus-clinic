import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
