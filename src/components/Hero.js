// src/components/Hero.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.spacing.xxlarge};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-bottom: ${({ theme }) => theme.spacing.large} solid transparent;
  &:after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing.large};
    left: 0;
    width: 100%;
    height: 100px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 50%;
    box-shadow: 0 50px 50px ${({ theme }) => theme.colors.background};
    z-index: -1;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  height: 100%;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.medium};
  }
`;

const CharacterContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  height: 100%;

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.xxlarge};
  }
`;

const HeroCharacter = styled.div`
  font-size: 350px; /* Increased size */
  animation: ${float} 3s infinite, ${rotate} 20s linear infinite;
  justify-self: center;
  transform-origin: center;
  position: relative;

  @media (max-width: 768px) {
    font-size: 250px; /* Increased size */
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

const CircularButtons = styled.div`
  position: absolute;
  width: 600px; /* Increased size */
  height: 600px; /* Increased size */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  pointer-events: none; /* Ensures the character can be interacted with */
  
  @media (max-width: 768px) {
    width: 400px; /* Increased size */
    height: 400px; /* Increased size */
  }
`;

const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.button.background};
  color: ${({ theme }) => theme.colors.button.text};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  position: absolute;
  pointer-events: auto; /* Ensures the buttons can be interacted with */
  width: 100px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.small};
    padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.medium};
    width: 80px;
  }
`;

// Positioning for circular buttons
const positions = [
  { top: '5%', left: '50%', transform: 'translate(-50%, -50%)' },
  { top: '20%', left: '85%', transform: 'translate(-50%, -50%)' },
  { top: '80%', left: '85%', transform: 'translate(-50%, -50%)' },
  { top: '95%', left: '50%', transform: 'translate(-50%, -50%)' },
  { top: '80%', left: '15%', transform: 'translate(-50%, -50%)' },
  { top: '20%', left: '15%', transform: 'translate(-50%, -50%)' },
];

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.xxlarge};
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  line-height: 1.2; /* Adjust line height for vertical stacking */
  text-shadow: 2px 2px ${({ theme }) => theme.colors.shadow};
  text-transform: uppercase; /* Add text transformation */
  letter-spacing: 2px; /* Add letter spacing */

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.xlarge};
  }
`;

const HeroSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.xlarge};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.subtitle};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  line-height: 1.2; /* Adjust line height for vertical stacking */
  text-shadow: 1px 1px ${({ theme }) => theme.colors.shadow};
  text-transform: capitalize; /* Add text transformation */
  letter-spacing: 1px; /* Add letter spacing */

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.large};
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

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroTitle>“Because Pulling Out Is for Amateurs”</HeroTitle>
        <HeroSubtitle>“Keeping Your Wallet Fat and Your Balls Empty”</HeroSubtitle>
      </TextContainer>
      <CharacterContainer>
        <HeroCharacter role="img" aria-label="vesticle">🍒</HeroCharacter>
        <CircularButtons>
          {positions.map((pos, i) => (
            <Button key={i} href="#" style={pos}>
              {["X", "Telegram", "Buy on Uniswap", "Dex Screener", "Dex Tools", "Base Scan"][i]}
            </Button>
          ))}
        </CircularButtons>
        {[...Array(30)].map((_, i) => (
          <Hair
            key={i}
            left={Math.random() * 100}
            duration={Math.random() * 2 + 2}
            delay={Math.random() * 5}
          />
        ))}
      </CharacterContainer>
    </HeroContainer>
  );
};

export default Hero;
