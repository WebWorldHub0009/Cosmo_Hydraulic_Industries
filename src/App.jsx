import FloatingButtons from "./Components/FloatingButtons"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import About from "./Pages/About"
import  Home  from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"
import Gallery from "./Pages/Gallery"
import Certificates from "./Pages/Certificates"
import Contact from './Pages/Contact'
import ProductDetail from "./Pages/ProductDetail"


function App() {

  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/certificates" element={<Certificates/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer/>
      <FloatingButtons/>
    </>
  )
}

export default App
