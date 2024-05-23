// src/components/NavBar.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
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
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
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
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ theme }) => `${theme.border.width} ${theme.border.style} ${theme.colors.border}`};
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.spacing.medium};
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

const Hair = styled.div`
  position: absolute;
  top: -10%;
  left: ${props => props.left}%;
  width: 2px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.text};
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

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  cursor: ${({ theme }) => theme.buttons.primary.cursor};
  transition: background-color 0.3s;
  animation: ${shake} 0.5s infinite;
  position: relative;
  overflow: hidden;

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
        <span role="img" aria-label="vesticle">🍒</span> Vesticle Coin
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
          Lair
          {[...Array(10)].map((_, i) => (
            <Hair
              key={i}
              left={Math.random() * 100}
              duration={Math.random() * 2 + 2}
              delay={Math.random() * 5}
            />
          ))}
          <Dropdown>
            <NavLink href="#">Hiding Spots</NavLink>
            <NavLink href="#">Treasure</NavLink>
          </Dropdown>
        </NavLink>
        <NavLink href="#">
          Mischief
          {[...Array(10)].map((_, i) => (
            <Hair
              key={i}
              left={Math.random() * 100}
              duration={Math.random() * 2 + 2}
              delay={Math.random() * 5}
            />
          ))}
          <Dropdown>
            <NavLink href="#">Pranks</NavLink>
            <NavLink href="#">Tales</NavLink>
          </Dropdown>
        </NavLink>
        <NavLink href="#">
          Stash
          {[...Array(10)].map((_, i) => (
            <Hair
              key={i}
              left={Math.random() * 100}
              duration={Math.random() * 2 + 2}
              delay={Math.random() * 5}
            />
          ))}
          <Dropdown>
            <NavLink href="#">Goodies</NavLink>
            <NavLink href="#">Collectibles</NavLink>
          </Dropdown>
        </NavLink>
        <NavLink href="#">
          Legacy
          {[...Array(10)].map((_, i) => (
            <Hair
              key={i}
              left={Math.random() * 100}
              duration={Math.random() * 2 + 2}
              delay={Math.random() * 5}
            />
          ))}
          <Dropdown>
            <NavLink href="#">History</NavLink>
            <NavLink href="#">Legends</NavLink>
          </Dropdown>
        </NavLink>
        <Button>
          Snatch Vesticle Now
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
