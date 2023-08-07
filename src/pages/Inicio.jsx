import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import { dataSlider } from '../components/dataSlider'
import Instagram from '../components/Instagram'

const Inicio = () => {
  return (
    <div>
        <Hero  heading="Captur Photography" message="I capture moments in nature and keep them alive."/>
        <Slider slides={dataSlider}/>
        <Instagram/>
    </div>
  )
}

export default Inicio