import Navbar from '../components/Navbar'
import Hero from '../sections/HeroSection'
import About from '../sections/AboutUs'
import Contact from '../sections/ContactSection'
import Products from '../sections/ProductsSection'

import { useEffect, useState } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'


export default function Home() {

  const [overlay, setOverlay] = useState(true)


  useEffect(() => {

    Aos.init()

    let listner = window.addEventListener('scroll', (e) => {

      console.log(window.scrollY)

      if (window.scrollY > window.innerHeight / 10) {
        setOverlay(true)
      }
      else {
        setOverlay(false)
      }

    })

    return () => {
      window.removeEventListener('scroll', listner)
    }

  }, [])

  return (
    <main className='text-center'>
      <Navbar overlay={overlay}/>
      <Hero />
      <About />
      <Contact />
      <Products />
      <Footer />

    </main>
  )
}
