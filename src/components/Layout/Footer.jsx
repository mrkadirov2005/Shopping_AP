import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #0e0e0e;
  color: #b3b3b3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLinks = styled.div`
  display: flex;
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  margin-right: 30px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  margin-right: 20px;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <h3>Company Name</h3>
        <p>Samarkand</p>
        <p>info@company.com</p>
        <FooterLinks>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterLinks>
      </FooterContent>
      <SocialLinks>
        <SocialLink href="#">
          <i className="fab fa-facebook-f"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-twitter"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-instagram"></i>
        </SocialLink>
      </SocialLinks>
    </StyledFooter>
  );
};

export default Footer;
