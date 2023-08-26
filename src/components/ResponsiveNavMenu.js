import React from 'react';
import { MenuItems } from './MenuItems';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ResponsiveNavMenu = ({ onClose }) => {
    return (
        <Menu>
            <ul>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.url} onClick={onClose}>
                            <MenuItem>
                                {item.icon}
                                <span>{item.title}</span>
                            </MenuItem>
                        </Link>
                    </li>
                ))}
            </ul>
        </Menu>
    );
};

export default ResponsiveNavMenu;

// Rest of the styled components remain unchanged...


const Menu = styled.div`
transition: all 0.5s ease-in-out;
z-index: 99;
position: absolute;
top: 100px;
left: 0;
background-color: #ecf0f1;
border-radius: 0.5rem;
width: 100vw;
ul{
    display: flex;
flex-direction: column;
padding: 2rem 0 2rem 0;
li{
    list-style-type: none;
    padding: 1rem;
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


`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 19px;
  }
`
