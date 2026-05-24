import { Routes, Route } from 'react-router-dom'

import Recipes from './pages/Recipes'
import Blog from './pages/blog'
import Contact from './pages/contact'

function App() {

  return (

    <Routes>

      <Route path="/" element={<Recipes />} />

      <Route path="/recipes" element={<Recipes />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>

  )
}

export default App