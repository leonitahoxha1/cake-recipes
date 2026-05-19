import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Recipes from './pages/Recipes'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/recipes" element={<Recipes />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App