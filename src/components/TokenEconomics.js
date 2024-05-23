// src/components/TokenEconomics.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import footerImg from '../assets/footer.png'; // Import the actual footer image

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const TokenEconomicsContainer = styled.div`
  background: linear-gradient(135deg, #d2b48c 25%, #c3b091 25%, #c3b091 50%, #d2b48c 50%, #d2b48c 75%, #c3b091 75%, #c3b091) 50px 50px,
              linear-gradient(45deg, #d2b48c 25%, #c3b091 25%, #c3b091 50%, #d2b48c 50%, #d2b48c 75%, #c3b091 75%, #c3b091) 50px 50px,
              #fff;
  background-size: 100px 100px;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxlarge};
  text-align: center;
  overflow: hidden;
  border-top: ${({ theme }) => theme.spacing.large} solid transparent;
  margin-top: -${({ theme }) => theme.spacing.xxlarge};
  padding-top: calc(${({ theme }) => theme.spacing.xxlarge} + ${({ theme }) => theme.spacing.large});

  &:before {
    content: '';
    position: absolute;
    top: -${({ theme }) => theme.spacing.large};
    left: 0;
    width: 100%;
    height: 100px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 50%;
    box-shadow: 0 -50px 50px ${({ theme }) => theme.colors.background};
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
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.shadow};
`;

const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.medium} auto;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};
  max-width: 600px;
  text-align: left;
  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
`;

const InfoItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.subtitle};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  color: ${({ theme }) => theme.colors.text};
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.footerText};
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  border-top: ${({ theme }) => theme.spacing.large} solid transparent;

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxlarge};
  }
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  color: ${({ theme }) => theme.colors.footerText};
`;

const Character = styled.img`
  position: absolute;
  width: 150px;
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

const Button = styled.a`
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

const TokenEconomics = () => {
  return (
    <TokenEconomicsContainer>
      <Character src={footerImg} alt="VASECTOMY Character" />
      <SectionTitle>Token Economics</SectionTitle>
      <SectionSubtitle>The Ultimate in Transparency and Trust</SectionSubtitle>
      <InfoBox>
        <InfoItem>
          <InfoTitle>Token Supply</InfoTitle>
          <InfoText>1,000,000</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Tax</InfoTitle>
          <InfoText>0%</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Contract Address</InfoTitle>
          <InfoText>To be announced</InfoText>
        </InfoItem>
      </InfoBox>
      <Button href="#">Buy $VASECTOMY</Button>
      <Footer>
        <FooterText>© 2024 VASECTOMY. All Rights Reserved.</FooterText>
        <FooterText>Follow us on: X, Telegram, Reddit</FooterText>
      </Footer>
      <Character src={footerImg} alt="VASECTOMY Character" />
    </TokenEconomicsContainer>
  );
};

export default TokenEconomics;
