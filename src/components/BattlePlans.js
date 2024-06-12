// src/components/BattlePlans.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import tankImg from '../assets/battle.png'; // Import tank image
import explosionImg from '../assets/header.png'; // Import explosion image

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BattlePlansContainer = styled.div`
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
  border-top: ${({ theme }) => theme.spacing.large} solid transparent;

  &:before {
    content: '';
    position: absolute;
    top: -${({ theme }) => theme.spacing.large};
    left: 0;
    width: 100%;
    height: 100px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 50%;
    box-shadow: 0 -${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.colors.background};
    z-index: -1;
  }

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxlarge} ${({ theme }) => theme.spacing.xlarge};
    padding-top: calc(${({ theme }) => theme.spacing.xxlarge} + ${({ theme }) => theme.spacing.large});
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

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.xxlarge};
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px ${({ theme }) => theme.colors.shadow};
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.xlarge};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.shadow};
`;

const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin: 20px auto;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};
  max-width: 800px;
  text-align: left;
  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex: 1;
    padding: 0 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-weight: normal;
  color: #fff;
`;

const Tank = styled.img`
  position: absolute;
  width: 400px;
  animation: ${float} 3s infinite;

  &:nth-child(1) {
    top: 10%;
    left: 5%;
  }

  &:nth-child(2) {
    bottom: 10%;
    right: 5%;
  }

  @media (max-width: 768px) {
    width: 100px;

    &:nth-child(1) {
      top: 5%;
      left: 5%;
    }

    &:nth-child(2) {
      bottom: 5%;
      right: 5%;
    }
  }
`;

const Explosion = styled.img`
  position: absolute;
  width: 100px;
  animation: ${float} 3s infinite;

  &:nth-child(3) {
    top: 20%;
    left: 10%;
  }

  &:nth-child(4) {
    bottom: 20%;
    right: 10%;
  }

  @media (max-width: 768px) {
    width: 70px;

    &:nth-child(3) {
      top: 10%;
      left: 10%;
    }

    &:nth-child(4) {
      bottom: 10%;
      right: 10%;
    }
  }
`;

const Button = styled.a`
  background: linear-gradient(135deg, #d2b48c, #1e90ff);
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: 30px;
  transition: background 0.3s;
  z-index: 100;
  &:hover {
    background: linear-gradient(135deg, #a9a9a9, #4682b4);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;

const BattlePlans = () => {
  return (
    <BattlePlansContainer>
      <Tank src={tankImg} alt="Tank" />
     
      <Explosion src={explosionImg} alt="Explosion" />
      <SectionTitle>Battle Plans</SectionTitle>
      <SectionSubtitle>“Strategize and Conquer!”</SectionSubtitle>
      <InfoBox>
        <InfoItem>
          <InfoTitle>Phase 1: Meme Barrage</InfoTitle>
          <InfoText>“Unleash a relentless barrage of memes to overwhelm the opposition. No mercy!”</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Phase 2: Viral Strike</InfoTitle>
          <InfoText>“Deploy viral tactics to spread our memes far and wide. Let's make them go viral!”</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Phase 3: Meme Domination</InfoTitle>
          <InfoText>“Secure our position as the ultimate meme overlords. The internet is our battlefield!”</InfoText>
        </InfoItem>
      </InfoBox>
      <Button href="https://uniswap.org/" target="_blank" rel="noopener noreferrer">Join the Battle</Button>
    </BattlePlansContainer>
  );
};

export default BattlePlans;
