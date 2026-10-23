import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Login from './Pages/Login'
import Register from './Pages/Register'

import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/about"element={<About></About>}></Route>
        <Route path="/contact"element={<Contact></Contact>}></Route>
        <Route path="/services"element={<Services></Services>}></Route>
        <Route path="/login"element={<Login></Login>}></Route>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App