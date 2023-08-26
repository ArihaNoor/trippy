import React from 'react'
import styled from 'styled-components'
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  return (
    <>
      <HeroSection bgimg={props.bgImg}>
        <HeroText>
          <h1>
            <Typewriter
              options={{
                strings: [props.heading],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>{props.desc}</p>
          <button>{props.btnText}</button>
        </HeroText>
      </HeroSection>
    </>
  )
}

export default Hero

const HeroSection = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    ${props => `url("${props.bgimg}")`};
`

const HeroText = styled.div`
position: relative;
top: 40%;
left: 50%;
transform: translate(-50%);
text-align: center;
width: 100%;
h1{
    font-size: 4rem;
    color: white;
    margin-top: 3rem;
    @media (max-width: 800px){
        font-size: 2rem;
    }
}
p{
    color: white;
    font-size: 2rem;
    margin-top: 0.5rem;
    @media (max-width: 800px){
        font-size: 1rem;
    }
}
button{
    background-color: white;
    color: black;
    font-weight: bold;
    border: none;
    padding: 0.5rem 2rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    box-shadow: 2px 2px 3px 3px black;
    cursor: pointer;
    &:hover{
      background-color: grey;
      color: white;
      transition: all 0.5s ease-in-out;
    }
}
`