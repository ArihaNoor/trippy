import React from 'react'
import styled from '@emotion/styled'

const ServiceCard = (props) => {
  return (
    <ServiceCards>
        <h3>{props.heading}</h3>
      <p>{props.desc}</p>
    </ServiceCards>
  )
}

export default ServiceCard

const ServiceCards = styled.div`
background-color: #F7F6F6;
width: 70%;
height: min-content;
text-align: center;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
p{
    border-left: 1px solid black;
}
`