import FloatingButtons from "./Components/FloatingButtons"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import About from "./Pages/About"
import  Home  from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"

function App() {

  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
      <Footer/>
      <FloatingButtons/>
    </>
  )
}

export default App
