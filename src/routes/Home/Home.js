import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Destination from './Destination'
import styled from 'styled-components'
import MainContent from '../../components/MainContent'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HomeComponent>
        <Navbar />
        <Hero
          bgImg="https://www.whatspaper.com/wp-content/uploads/2021/09/cappadocia-wallpaper-whatspaper-7.jpg"
          heading="Your Journey Your Story"
          desc="Choose Your Favorite Destination"
          btnText="Plan Travel"
        />
        <MainContent heading="Popular Destinations" text="Tours Give You the Opportunity to see a lot within a time frame." />
        <Destination 
        flexDirection="row" 
        image1="https://www.carwiz.rent/data/public/2019-07/blue_mosque_15db837b846c60.jpg" 
        image2="https://i0.wp.com/colorfulsisters.com/wp-content/uploads/2020/09/Topkapi-Palace-Harem-10.jpg?resize=1365%2C1180&ssl=1"
        heading="Istanbul"
        text="Istanbul, a vibrant and historic metropolis 
        spanning two continents, serves as a 
        bridge between Europe and Asia, 
        both culturally and geographically. 
        The city's rich tapestry of heritage is 
        woven from its Byzantine, Roman, and Ottoman 
        past, evident in iconic landmarks like the 
        <b> Hagia Sophia, Blue Mosque, and Topkapi Palace</b>. 
        Bustling bazaars like the Grand Bazaar offer 
        sensory delights, while the Bosphorus strait 
        symbolizes the city's unique position. 
        Modern skyscrapers share the skyline with 
        ancient minarets, creating a captivating 
        blend of old and new."
        />
        <Destination 
        flexDirection="row" 
        image1="https://www.travellingking.com/wp-content/uploads/2022/11/Cappadocia-Beautiful-girl-sitting-on-the-hotel-and-looking-to-hot-air-balloons-in-Cappadocia-Turkey..jpg" 
        image2="https://www.nzherald.co.nz/resizer/-wR7v1XDhbApgDw6k7N4RwAseNg=/576x613/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/KE2K6P5LPVOQZ5VTOZUAMWDAAM.jpg" 
        heading="Cappadocia"
        text="Cappadocia, a captivating region in central Turkey, is renowned for its surreal 
        and otherworldly landscapes. The area's distinctive topography is shaped by centuries 
        of volcanic activity, resulting in an awe-inspiring terrain of towering rock formations, 
        known as fairy chimneys, and intricate cave dwellings. Cappadocia's unique beauty draws 
        visitors from around the globe, who come 
        to experience its mesmerizing hot air balloon rides at dawn, explore ancient underground 
        cities carved into the soft rock, and wander through valleys adorned with fairy-tale-like rock formations."
        />
         <Destination 
        flexDirection="row" 
        image1="https://assets3.thrillist.com/v1/image/3135778/792x781/scale;webp=auto;jpeg_quality=60.jpg" 
        image2="https://www.nationsonline.org/gallery/Turkey/Kocatepe-mosque-Ankara.jpg" 
        heading="Ankara"
        text="Ankara, the capital city of Turkey, is a dynamic metropolis 
        that balances its historical significance with modern vibrancy. 
        Nestled in the heart of the Anatolian Plateau, Ankara is a hub of 
        political, cultural, and economic activity. It houses the country's 
        governmental institutions and diplomatic missions, while also boasting 
        a diverse cultural scene, featuring museums, theaters, and universities. 
        The city's history is interwoven with ancient civilizations and empires,
         reflected in its historical landmarks such as the impressive Atatürk 
         Mausoleum and the Roman-era Temple of Augustus."
        />
        <MainContent heading="Recent Trips" text="You can discover unique destinations using Google Maps." />
       <Cards>
       <Card 
       backColor="#DBDFE1"
        image="https://move2turkey.com/wp-content/uploads/2020/04/Sultan-Ahmed-Mosque-in-Istanbul10.jpg" 
        head="Trip in Turkey" 
        body="Embarking on a recent journey to 
        Turkey with our travel agency 
        was an unforgettable adventure. 
        From the intricate mosaics of Istanbul's 
        Hagia Sophia to the mesmerizing hot 
        air balloon rides over Cappadocia's 
        surreal landscapes, our travelers 
        experienced the perfect blend of 
        ancient wonders and modern marvels. " 
        />
        <Card 
        backColor="#F6CAF4"
        image="https://e0.pxfuel.com/wallpapers/838/446/desktop-wallpaper-canada-famous-places.jpg" 
        head="Trip in Canada" 
        body="Embarking on an enchanting journey to Canada through our travel agency was a whirlwind of discovery. 
        From the vibrant streets of Toronto to the awe-inspiring landscapes of Banff National Park, our adventure was 
        a tapestry of urban excitement and natural splendor. Guided by experts, we experienced the diverse culture, iconic landmarks and beautiful lakes." 
        />
        <Card 
        backColor="#A8A5E6"
        image="https://assets-news.housing.com/news/wp-content/uploads/2022/07/21152615/MALDIVES-FEATURE-compressed.jpg" 
        head="Trip in Maldives" 
        body="Basking in the tropical paradise of the Maldives through our travel agency was a dream realized. With powdery white beaches, crystal-clear waters, and luxurious overwater bungalows, the journey was a true slice of heaven. Our curated escape to this idyllic destination was a perfect blend of relaxation and natural beauty." 
        />
       </Cards>
       <Footer />
      </HomeComponent>
    </>
  )
}

export default Home

const HomeComponent = styled.div`
width: 100%;
overflow-x: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`

const Cards = styled.div`
margin-top: 3rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 2rem;
`;