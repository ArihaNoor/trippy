import React from 'react'
import { styled } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import List from '../components/List'

const Footer = () => {
  return (
    <FooterComponent>
        <UpperDiv>
           <Content>
           <h1>Trippy</h1>
            <p>Choose Your Favourite Destination</p>
           </Content>
            <Icons>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </Icons>
        </UpperDiv>
        <hr></hr>
        <LowerDiv>
            <List l1="Project" l2="ChangeLog" l3="Status" l4="License" l5="All Versions" />
            <List l1="Community" l2="Github" l3="Issues" l4="Project" l5="Twitter" />
            <List l1="Help" l2="Support" l3="Troubleshooting" l4="Contact Us"/>
            <List l1="Others" l2="Terms of Service" l3="Privacy Policy" l4="License"/>
        </LowerDiv>
    </FooterComponent>
  )
}

export default Footer

const FooterComponent = styled.footer`
background-color: black;
color: white;
display: flex;
flex-direction: column;
text-align: center;
width: 100vw;
padding: 3rem 0;
margin-top: 9rem;
hr{
    opacity: 0.2;
    width: 80%;
    margin: 2rem auto;
}
`

const UpperDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

const LowerDiv = styled.div`
display: flex;
justify-content: space-around;
margin-top: 4rem;
padding: 0rem 7rem;
gap: 1rem;	
flex-wrap: wrap;
`;

const Content = styled.div``;

const Icons = styled.div`
display: flex;
gap: 20px;
flex-wrap: wrap;
`;

