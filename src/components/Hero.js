// src/components/Hero.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import headerImg from '../assets/header.png'; // Import the actual header image

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
  background: linear-gradient(135deg, #d2b48c 25%, #c3b091 25%, #c3b091 50%, #d2b48c 50%, #d2b48c 75%, #c3b091 75%, #c3b091) 50px 50px,
              linear-gradient(45deg, #d2b48c 25%, #c3b091 25%, #c3b091 50%, #d2b48c 50%, #d2b48c 75%, #c3b091 75%, #c3b091) 50px 50px,
              #fff;
  background-size: 100px 100px;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxlarge};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const HeroCharacter = styled.img`
  width: 350px;
  height: 350px;
  animation: ${float} 3s infinite;
  justify-self: center;
  transform-origin: center;
  position: relative;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

const CircularButtons = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const Button = styled.a`
  background: linear-gradient(135deg, #d2b48c, #1e90ff);
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
  transition: background 0.3s;
  position: absolute;
  pointer-events: auto;
  width: 100px;
  text-align: center;

  &:hover {
    background: linear-gradient(135deg, #a9a9a9, #4682b4);
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
  line-height: 1.2;
  text-shadow: 2px 2px ${({ theme }) => theme.colors.shadow};
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.xlarge};
  }
`;

const HeroSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.xlarge};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.subtitle};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  line-height: 1.2;
  text-shadow: 1px 1px ${({ theme }) => theme.colors.shadow};
  text-transform: capitalize;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.large};
  }
`;

const BuyButton = styled.a`
  background: linear-gradient(135deg, #d2b48c, #1e90ff);
  color: ${({ theme }) => theme.colors.button.text};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  font-size: ${({ theme }) => theme.fonts.size.large};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.large};
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(135deg, #a9a9a9, #4682b4);
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.medium};
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
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

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroTitle>“Because Dictatorship is Hilarious”</HeroTitle>
        <HeroSubtitle>“Keeping Your Memes Strong and Your Wallet Stronger”</HeroSubtitle>
        <BuyButton href="https://uniswap.org/">Buy $TGUN</BuyButton>
      </TextContainer>
      <CharacterContainer>
        <HeroCharacter src={headerImg} alt="TRUMPJONGUN Character" />
        <CircularButtons>
          {positions.map((pos, i) => (
            <Button key={i} href={
              [
                "https://x.com/TRUMPJONGUN",
                "https://t.me/TRUMPJONGUN",
                "https://uniswap.org/",
                "https://dexscreener.com/base/0xbe7e2f3dae1e9afa3f284aef79ee9f51eb59229f",
                "https://dexscreener.com/base/0xbe7e2f3dae1e9afa3f284aef79ee9f51eb59229f",
                "https://basescan.org/token/0x55A1F47e7d633646096A0c721ad921cbb83F506B"
              ][i]
            } style={pos}>
              {["X", "Telegram", "Uniswap", "Dex Screener", "Dex Tools", "Base Scan"][i]}
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
