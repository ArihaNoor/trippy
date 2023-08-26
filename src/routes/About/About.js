import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero';
import Footer from '../../components/Footer'
import { styled } from 'styled-components';
import MainContent from '../../components/MainContent';

const About = () => {
  return (
    <>
      <AboutComponent>
        <Navbar />
        <Hero
          bgImg="https://media2.thrillophilia.com/images/photos/000/124/471/original/1514023272_turkey.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true"
          heading="About Us"
          btnText="More Info"
        />
       <Content>
       <p>Embarking on Unforgettable Journeys

Trippy stands as an eminent figure in the realm of travel agencies, having etched its name in the annals of remarkable travel experiences. With a legacy built on wanderlust and an unwavering commitment to excellence, Trippy has redefined the art of exploration.

Renowned for its unparalleled success, <b>Trippy has orchestrated numerous tours that have transcended the boundaries of ordinary travel. Through meticulous planning and an unyielding dedication to customer satisfaction, the agency has consistently curated journeys that transform dreams into cherished memories.</b>

What sets Trippy apart is not only its expansive global reach but also its keen understanding of the diverse tapestry of destinations. From the majestic peaks of the Himalayas to the pristine beaches of Bora Bora, Trippy has navigated the world with finesse, ensuring that each expedition is a symphony of cultural enrichment and natural wonder.

At the heart of Trippy's triumph lies a team of passionate explorers and travel experts who leave no stone unturned in crafting immersive itineraries. Their deep-rooted connections with local communities and a commitment to responsible travel have earned the agency not just success.</p>
<MainContent heading="Our Mission" text="Trippy's mission is to create unparalleled travel experiences that ignite a sense of wonder and discovery within every traveler. Through meticulous planning, immersive cultural engagement, and a commitment to sustainable travel practices, we strive to craft journeys that not only fulfill dreams but also leave a positive impact on the destinations we explore" />
<MainContent heading="Our Vision" text="Trippy envisions a world where travel is a transformative force, connecting people across cultures and fostering a deep appreciation for the beauty and diversity of our planet. With innovation at our core, we aspire to be the pioneers of cutting-edge travel experiences, continuously pushing boundaries to set new standards in exploration, while preserving and celebrating the natural and cultural heritage of each destination we touch." />
       </Content>
        <Footer />
      </AboutComponent>
    </>
  )
}

export default About

const AboutComponent = styled.div`
text-align: center;
overflow-x: hidden;

p{
  margin-top: 2rem;
}
`

const Content = styled.div`
padding: 2rem;
`