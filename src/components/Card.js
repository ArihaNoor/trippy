import React from 'react'
import { styled } from 'styled-components'

const Card = (props) => {
  return (
    <CardComponent backgroundColor={props.backColor}>
      <img src={props.image}/>
      <h3>{props.head}</h3>
      <p>{props.body}</p>
    </CardComponent>
  )
}

export default Card

const CardComponent = styled.div`
background-color: ${props => props.backgroundColor};
width: 25%;
height: min-content;
padding: 1rem;
h3{
    text-decoration: underline;
}
img{
    width: 100%;
    height: 60%;
    border-radius: 20px;
}
border-radius: 20px;
box-shadow:
  2.9px 3.4px 2.7px rgba(0, 0, 0, 0.022),
  7.3px 8.7px 6.9px rgba(0, 0, 0, 0.031),
  14.9px 17.7px 14.2px rgba(0, 0, 0, 0.039),
  30.7px 36.5px 29.2px rgba(0, 0, 0, 0.048),
  84px 100px 80px rgba(0, 0, 0, 0.07)
;
@media (max-width: 800px){
    width: 80%; 
  }

&:hover{
  background-color: white;
  transition: all 0.5s ease-in-out;
}
`