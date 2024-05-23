// src/components/TokenEconomics.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.spacing.xxlarge};
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: ${({ theme }) => theme.spacing.large} solid transparent;
  margin-top: -${({ theme }) => theme.spacing.xxlarge}; /* Adjust offset */
  padding-top: calc(${({ theme }) => theme.spacing.xxlarge} + ${({ theme }) => theme.spacing.large}); /* Adjust padding to compensate for offset */

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
    padding-top: calc(${({ theme }) => theme.spacing.xxlarge} + ${({ theme }) => theme.spacing.large}); /* Adjust padding for larger screens */
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

const Character = styled.div`
  position: absolute;
  font-size: 150px;
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
    font-size: 100px;

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

const TokenEconomics = () => {
  return (
    <TokenEconomicsContainer>
      <Character role="img" aria-label="vesticle">🍒</Character>
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
      <Footer>
        <FooterText>© 2024 Vesticle Coin. All Rights Reserved.</FooterText>
        <FooterText>Follow us on: X, Telegram, Reddit</FooterText>
      </Footer>
      <Character role="img" aria-label="vesticle">🍒</Character>
    </TokenEconomicsContainer>
  );
};

export default TokenEconomics;
