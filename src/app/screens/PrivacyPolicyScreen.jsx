import React from 'react'
import PrivacyPolicyCompOne from '../components/PrivacyPolicyCompOne'
import PageHeroSection from '../components/PageHeroSection'
import { Shield } from 'lucide-react';

const PrivacyPolicyScreen = () => {
  return (
    <div>
      {/* <PageHeroSection /> */}
      <PageHeroSection
        icon={Shield}
        title="Terms & Conditions"
        subtitle="Read our terms of service and understand your rights and responsibilities."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop"
      />
      <PrivacyPolicyCompOne />
    </div>
  )
}

export default PrivacyPolicyScreen
