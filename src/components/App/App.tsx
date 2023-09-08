// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../Home/Home'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
