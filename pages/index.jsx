import Navbar from '../components/Navbar'
import Hero from '../sections/HeroSection'
import Contact from '../sections/ContactSection'

import { useEffect, useState } from 'react'


export default function Home() {

  const [overlay, setOverlay] = useState(true)


  useEffect(() => {

    let listner = window.addEventListener('scroll', (e) => {

      console.log(window.scrollY)

      if (window.scrollY > 130) {
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
      <Contact />

    </main>
  )
}
