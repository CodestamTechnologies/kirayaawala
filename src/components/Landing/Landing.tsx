import React from 'react'
import Hero from './Hero/Hero'
import Choose from './Choose/Choose'
import { Slider } from './Slider/Slider'
import Property from './Property/Property'
import Banner from './Banner/Banner'
import Explore from './Explore/Explore'
import Inquiry from './Inquiry/Inquiry'
import Testimonial from './Testimonial/Testimonial'

const Landing = () => {
  return (
    <div className='' >
      <Hero />
      <div className="p-5">
        <Choose />
        <Slider />
        <Property />
        <Banner />
        <Explore />
        <Inquiry />
        <Testimonial />
      </div>
    </div>
  )
}

export default Landing
