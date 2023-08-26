import React from 'react'
import { styled } from 'styled-components'

const MainContent = (props) => {
  return (
    <Content>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </Content>
  )
}

export default MainContent

const Content = styled.div`
h1{
    margin-top: 3rem;
    font-size: 3.5rem;
}
`


