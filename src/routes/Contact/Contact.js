import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import styled from '@emotion/styled'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <>
    <ContactComponent>
       <Navbar />
       <Hero 
       bgImg = "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Travel-agents-in-Dubai-_-cover-2.jpg"
       heading="Contact Us"
       btnText="Let's Travel Together"
       />
       <ContactForm />
       <Footer />
       </ContactComponent>
    </>
  )
}

export default Contact

const ContactComponent = styled.div`
overflow-x: hidden;
`
