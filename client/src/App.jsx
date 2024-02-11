import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'

import { Home } from './pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
