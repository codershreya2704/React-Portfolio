import React from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import {Link as LinkR} from 'react-router-dom';
import { DiYii } from 'react-icons/di';
import {FaBars} from 'react-icons/fa';



const Nav = styled.div`
background-color: ${({theme}) => theme.card_light}; 
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
top:0;
z-index:10;
@media screen and (max-width:960px){
transition: 0.8s all ease;
}
`
;

const NavbarContainer= styled.div`
display:flex;
justify-space:between;
height:60px;
z-index:1;
width:100%;
padding:0 24px;
max-width: 1200px;
`;

const NavLogo= styled(LinkR)`
width:80%;
padding: 0 6px;
display: flex;
justify-self:flex-start;
cursor:pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width: 768px){
padding: 0 0px;
}`
;

const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
display:block;
position: absolute;
top:0;
right:0;
transform: translate(-100%, 50%);
font-size: 1.5rem;
cursor:pointer;
color:${({theme}) => theme.text_primary};
}`
;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;
    const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;
const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Navbar = () => { 
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiYii size="3rem" /> <span>Portfolio</span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
            <NavItems>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">Skills</NavLink>
                <NavLink href="#">Projects</NavLink>
                <NavLink href="#">Experience</NavLink>
                <NavLink href="#">Education</NavLink>
            </NavItems>
            <ButtonContainer>
                <GitHubButton>Github Profile</GitHubButton>
            </ButtonContainer>
        </NavbarContainer>
       
    </Nav>
    );
   
};
export default Navbar;
