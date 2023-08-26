import React from 'react'
import { styled } from 'styled-components'

const Destination = (props) => {
    return (
        <PopularDestinations>
            <MainDestinations flexDirection={props.flexDirection}>
                <Content>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
                </Content>
                <Images>
                <img className='image2' src={props.image1} />
                <img src={props.image2}  />
                </Images>
            </MainDestinations>
        </PopularDestinations>
    )
}

export default Destination

const PopularDestinations = styled.div`
width: 80%;
display: flex;
text-align: center;
flex-direction: column;
@media (max-width: 800px){
    width: 100%;
}
`;
const MainDestinations = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: ${props => props.flexDirection};
gap: 2rem;
margin: 6rem 2rem;
@media (max-width: 800px){
    flex-direction: column;
    margin: 2rem 2rem;
}
`;
const Content = styled.div`
  width: 60%; 
  @media (max-width: 800px){
    width: 100%;
  }
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  gap: 1rem;
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 20px;
    @media (max-width: 800px){
      width: 100%; 
    }
  }
  @media (max-width: 800px){
    width: 100%; 
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 800px){
    .image2{
        position: absolute;
        right: 20%;
        transform: translate(40%, -50%);
      }
  }

`;
