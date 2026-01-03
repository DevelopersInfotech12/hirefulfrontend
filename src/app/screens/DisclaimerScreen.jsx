import React from 'react'
import DisclaimerCompOne from '../components/DisclaimerCompOne'
import PageHeroSection from '../components/PageHeroSection'
import { Scale } from 'lucide-react'

const DisclaimerScreen = () => {
  return (
    <div>
       <PageHeroSection
        icon={Scale}
        title="Disclaimer"
        subtitle="Important legal information regarding our services and platform."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop"
      />
      <DisclaimerCompOne/>
    </div>
  )
}

export default DisclaimerScreen
