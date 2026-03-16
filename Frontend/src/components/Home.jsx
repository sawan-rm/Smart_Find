import React from 'react'
import NavBar from './shared/NavBar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
