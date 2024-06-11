// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #d2b48c 25%, #c3b091 25%, #c3b091 50%, #d2b48c 50%, #d2b48c 75%, #c3b091 75%, #c3b091) 50px 50px,
              linear-gradient(45deg, #d2b48c 25%, #c3b091 25%, #c3b091 50%, #d2b48c 50%, #d2b48c 75%, #c3b091 75%, #c3b091) 50px 50px,
              #fff;
  background-size: 100px 100px;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  position: relative;
  z-index: 10;
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
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  margin: ${({ theme }) => theme.spacing.medium} 0;

  @media (min-width: 768px) {
    margin: 0 ${({ theme }) => theme.spacing.medium};
  }
`;

const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  margin: ${({ theme }) => theme.spacing.xsmall} 0;
  display: block;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.medium};

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const SocialButton = styled.a`
  background: linear-gradient(135deg, #d2b48c, #1e90ff);
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin: 0 ${({ theme }) => theme.spacing.small};
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(135deg, #a9a9a9, #4682b4);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#hero">Home</FooterLink>
          <FooterLink href="#mission-control">Mission Control</FooterLink>
          <FooterLink href="#battle-plans">Battle Plans</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLink href="mailto:info@example.com">trumpjongun@nuclear.com</FooterLink>
          <FooterLink href="tel:+1234567890">55호 관저</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialButtons>
            <SocialButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </SocialButton>
            <SocialButton href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              Telegram
            </SocialButton>
          </SocialButtons>
        </FooterSection>
      </FooterContent>
      <FooterText>© 2023 TRUMPJONGUN. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
