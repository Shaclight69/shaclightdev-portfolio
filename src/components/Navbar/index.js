import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  SocialMediaIcons,
  SocialMediaIcon,
} from "./NavbarStyledComponent";
import { GiJesterHat } from "react-icons/gi";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Bio } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <GiJesterHat
              size="1.5rem"
              color="#79FEED"
              style={{
                marginRight: "0.5rem",
              }}
            />
            <Span>
              Shaclight<span style={{ color: "#8ae2e0" }}>dev</span>
            </Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.linkedin} target="display">
              <FaLinkedin />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.twitter} target="display">
              <RiWhatsappFill />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.insta} target="display">
              <RiInstagramFill />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.linkedin} target="display">
                <FaLinkedin />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.twitter} target="display">
                <RiWhatsappFill />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.insta} target="display">
                <RiInstagramFill />
              </SocialMediaIcon>
            </SocialMediaIcons>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
