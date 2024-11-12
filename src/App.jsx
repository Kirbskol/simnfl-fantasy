import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Draft from './components/Draft.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draft" element={<Draft />} />
      </Routes>
    </Router>
  )
}

export default App