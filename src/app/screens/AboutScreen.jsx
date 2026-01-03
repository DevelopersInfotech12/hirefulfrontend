import React from 'react'
import AboutCompOne from '../components/AboutCompOne'
import PageHeroSection from '../components/PageHeroSection'
import { Scale } from 'lucide-react'

const AboutScreen = () => {
  return (
    <div>
       <PageHeroSection
        icon={Scale}
        title="About Us"
        subtitle="Learn more about our mission, vision, and the team behind our success."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop"
      />
      <AboutCompOne/>
    </div>
  )
}

export default AboutScreen
