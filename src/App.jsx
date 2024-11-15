import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Draft from './components/Draft.jsx'
import Roster from './components/Roster.jsx'
import Leaderboard from './components/Leaderboard.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  )
}

export default App