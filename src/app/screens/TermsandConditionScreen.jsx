import React from 'react'
import TermsandConditionCompOne from '../components/TermsandConditionCompOne'
import PageHeroSection from '../components/PageHeroSection'
import { Scale } from 'lucide-react' 

const TermsandConditionScreen = () => {
  return (
    <div>
      <PageHeroSection
        icon={Scale}
        title="Terms & Conditions"
        subtitle="Read our terms of service and understand your rights and responsibilities."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop"
      />
      <TermsandConditionCompOne/>
    </div>
  )
}

export default TermsandConditionScreen
