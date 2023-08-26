import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { Button } from '@mui/material';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveNavMenu from './ResponsiveNavMenu';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 800) {
                setMenuOpen(false); 
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Nav>
            <Logo>Trippy</Logo>
            <List>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.url}>
                            <MenuItem>
                                {item.icon}
                                <span>{item.title}</span>
                            </MenuItem>
                        </Link>
                    </li>
                ))}
            </List>
            <Responsive>
                <div onClick={toggleMenu}>
                    <MenuIcon sx={{
                        cursor: 'pointer',
                    }} />
                </div>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'grey',
                        fontWeight: 'bolder',
                        '&:hover': {
                            backgroundColor: '#222',
                        },
                    }}
                >
                    Sign Up
                </Button>
            </Responsive>
            {isMenuOpen && <ResponsiveNavMenu onClose={toggleMenu} />}
        </Nav>
    );
};

export default Navbar;



const Responsive = styled.div`
display: flex;
align-items: center;
gap: 20px;
@media (min-width: 800px){
    div{
        display: none;
    }
}
`;

const Nav = styled.nav`
z-index: 999;
display: flex;
background-color: white;
justify-content: space-between;
align-items: center;
align-content: center;
padding: 0px 30px;
box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
width: 90%;
height: 80px;
border-radius: 13px;
position: fixed;
top: 20px;
left: 50%;
transform: translate(-50%);
`

const Logo = styled.h1`
font-weight: bolder;
text-transform: uppercase;
cursor: pointer;
font-size: 30px;
`

const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;
white-space: nowrap;
li{
    list-style-type: none;
    padding: 0.5rem;
    border-radius: 0.2rem;
    a{
        text-decoration: none;
        color: #222;
        &:hover{
            color: white;
        }
    }
    &:hover{
        background-color: #222;
        color: white;
        transition: all 0.2s ease-in-out;
    }
}
@media (max-width: 800px){
    display: none;
}
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 19px;
  }
`
