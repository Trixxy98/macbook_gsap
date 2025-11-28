import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { ScrollTrigger} from 'gsap/all'
import gsap from 'gsap'
import Performance from './components/Performance'
import  Features  from './components/Features'
import Footer from './components/Footer'
import Highlights from './components/Highlights'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
    </main>
  )
}

export default App