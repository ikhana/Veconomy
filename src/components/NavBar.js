// src/components/NavBar.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png'; 


const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-8px);
  }
`;

const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-3px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(3px);
  }
`;

const fall = keyframes`
  0% {
    top: -10%;
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
`;

const Nav = styled.nav`
  background: linear-gradient(135deg, #d2b48c 25%, #c3b091 25%, #c3b091 50%, #d2b48c 50%, #d2b48c 75%, #c3b091 75%, #c3b091) 50px 50px,
              linear-gradient(45deg, #d2b48c 25%, #c3b091 25%, #c3b091 50%, #d2b48c 50%, #d2b48c 75%, #c3b091 75%, #c3b091) 50px 50px,
              #fff;
  background-size: 100px 100px;
  position: relative;
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ theme }) => `${theme.border.width} ${theme.border.style} ${theme.colors.border}`};
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.spacing.medium};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
    background-size: 10px 10px;
    opacity: 0.3;
  }
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.xxlarge};
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  position: relative;
  animation: ${bounce} 2s infinite;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.xlarge};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Hair = styled.div`
  position: absolute;
  top: -10%;
  left: ${props => props.left}%;
  width: 2px;
  height: 10px;
  background-color: #ffffff; // White color for hairs resembling sperm
  opacity: 0;
  animation: ${fall} ${props => props.duration}s infinite ${props => props.delay}s;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  text-decoration: none;
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.small};
  transition: color 0.3s;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &:before {
      height: 100%;
      top: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.small} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    &:last-child {
      border-bottom: none;
    }
  }

  &:hover ${Hair} {
    animation: ${fall} ${props => props.duration}s infinite ${props => props.delay}s;
  }
`;

const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  cursor: ${({ theme }) => theme.buttons.primary.cursor};
  transition: background-color 0.3s;
  animation: ${shake} 1.5s infinite;
  position: relative;
  overflow: hidden;
  text-decoration: none; 
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:hover ${Hair} {
    animation: ${fall} ${props => props.duration}s infinite ${props => props.delay}s;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => `${theme.border.width} ${theme.border.style} ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.spacing.medium};
  display: none;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};

  ${NavLink}:hover & {
    display: flex;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <LogoImage src={logo} alt="TRUMPJONGUN Logo" />
        TRUMPJONGUN
        {[...Array(20)].map((_, i) => (
          <Hair
            key={i}
            left={Math.random() * 100}
            duration={Math.random() * 2 + 2}
            delay={Math.random() * 5}
          />
        ))}
      </Logo>
      <NavLinks>
        <NavLink href="#">
          Dictator's Den
          {[...Array(10)].map((_, i) => (
            <Hair
              key={i}
              left={Math.random() * 100}
              duration={Math.random() * 2 + 2}
              delay={Math.random() * 5}
            />
          ))}
          <Dropdown>
            <NavLink href="#">Secret Bunkers</NavLink>
            <NavLink href="#">Golden Thrones</NavLink>
          </Dropdown>
        </NavLink>
        <NavLink href="#">
          Power Plays
          {[...Array(10)].map((_, i) => (
            <Hair
              key={i}
              left={Math.random() * 100}
              duration={Math.random() * 2 + 2}
              delay={Math.random() * 5}
            />
          ))}
          <Dropdown>
            <NavLink href="#">Epic Moves</NavLink>
            <NavLink href="#">Strategies</NavLink>
          </Dropdown>
        </NavLink>
        <NavLink href="#">
          Nuke Stash
          {[...Array(10)].map((_, i) => (
            <Hair
              key={i}
              left={Math.random() * 100}
              duration={Math.random() * 2 + 2}
              delay={Math.random() * 5}
            />
          ))}
          <Dropdown>
  <NavLink href="#">Explosive Memes</NavLink>
  <NavLink href="#">Nuclear Jokes</NavLink>
</Dropdown>
</NavLink>
<NavLink href="#">
  Supreme Legacy
  {[...Array(10)].map((_, i) => (
    <Hair
      key={i}
      left={Math.random() * 100}
      duration={Math.random() * 2 + 2}
      delay={Math.random() * 5}
    />
  ))}
  <Dropdown>
    <NavLink href="#">Historical Feats</NavLink>
    <NavLink href="#">Legendary Rants</NavLink>
  </Dropdown>
</NavLink>
<Button href="https://dexscreener.com/base/0xbe7e2f3dae1e9afa3f284aef79ee9f51eb59229f">
  Snatch $TGUN Now
  {[...Array(10)].map((_, i) => (
    <Hair
      key={i}
      left={Math.random() * 100}
      duration={Math.random() * 2 + 2}
      delay={Math.random() * 5}
    />
  ))}
</Button>
</NavLinks>
</Nav>
);
};

export default NavBar;

