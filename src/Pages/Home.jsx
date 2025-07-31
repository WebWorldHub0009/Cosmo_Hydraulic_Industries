import React from 'react'
import HeroSection from '../Components/HeroSection'
import HowItWorks from '../Components/HowItWorks'
import FuturisticSlider from '../Components/FuturisticSlider'
import Owner from '../Components/Owner'
import TeamMembers from '../Components/TeamMembers'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <HowItWorks/>
      <FuturisticSlider/>
      <TeamMembers/>
      <Owner />
    </div>
  )
}

export default Home
