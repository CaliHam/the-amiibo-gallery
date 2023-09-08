// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import AllAmiibos from '../AllAmiibos/AllAmiibos'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className='container w-full flex justify-items-center items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllAmiibos />} />
      </Routes>
    </div>
  )
}

export default App
