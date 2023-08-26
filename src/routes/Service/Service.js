import React from 'react'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styled from '@emotion/styled'
import ServiceCard from '../../components/ServiceCard'
import ViewCozyIcon from '@mui/icons-material/ViewCozy';

const Service = () => {
  return (
    <>
    <ServiceComponent >
       <Navbar />
       <Hero 
       bgImg = "https://images.squarespace-cdn.com/content/v1/55fd7031e4b05d951e5158dc/1444674113076-3HL8A5EFF17OCLZUTSP2/Plan+a+trip+Image+2.jpg?format=1500w"
       heading="Our Services"
       btnText="Check Out"
       /> 
       <Cards>
       <ServiceCard heading="Luxury Escapes" desc="Indulge in opulent getaways with our luxury travel packages that combine lavish accommodations, fine dining, and exclusive experiences, redefining the art of sophisticated travel." />
       <ServiceCard heading="Cultural Immersion" desc="Immerse yourself in the heart of local cultures through our immersive activities, allowing you to connect deeply with communities and traditions, fostering a genuine travel experience." />
       <ServiceCard heading="Wellness Retreats" desc="Rejuvenate your mind, body, and soul through our wellness retreats that combine spa treatments, yoga sessions, and holistic activities in idyllic settings." />
       <ServiceCard heading="Adventure Expeditions" desc="Embark on adrenaline-pumping adventures with our outdoor enthusiasts, whether it's trekking through rugged terrains, diving into crystal-clear waters, or scaling breathtaking peaks." />
       <ServiceCard heading="24/7 Customer Support" desc="Our dedicated support team is available around the clock to assist you, offering peace of mind throughout your journey, addressing any concerns that may arise." />
       </Cards>
       <Footer />
       </ServiceComponent>
    </>
  )
}

export default Service

const ServiceComponent = styled.div`
overflow-x: hidden;
`

const Cards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1rem;
gap: 1rem;
`