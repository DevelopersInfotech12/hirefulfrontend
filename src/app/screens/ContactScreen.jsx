import React from 'react'
import ContactCompOne from '../components/ContactCompOne'
import FooterBanner from '../components/FooterBanner'
import PageHeroSection from '../components/PageHeroSection'
import { Scale } from 'lucide-react'

const ContactScreen = () => {
  return (
    <div>
       <PageHeroSection
        icon={Scale}
        title="Contact Us"
        subtitle="We would love to hear from you. Whether you have a question, our team is ready to answer all your questions."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=600&fit=crop"
      />
      <ContactCompOne />
    </div>
  )
}

export default ContactScreen
