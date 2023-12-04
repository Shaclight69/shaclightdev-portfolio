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
import { RiInstagramFill, RiMessengerFill } from "react-icons/ri";
import { Bio } from "../../data/constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setIsOpen(false);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </NavLink>
          <NavLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </NavLink>
          <NavLink
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </NavLink>
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.linkedin} target="display">
              <FaLinkedin />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.facebook} target="display">
              <RiMessengerFill />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.insta} target="display">
              <RiInstagramFill />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </ButtonContainer>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
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
                  <SocialMediaIcon href={Bio.facebook} target="display">
                    <RiMessengerFill />
                  </SocialMediaIcon>
                  <SocialMediaIcon href={Bio.insta} target="display">
                    <RiInstagramFill />
                  </SocialMediaIcon>
                </SocialMediaIcons>
              </MobileMenu>
            </motion.div>
          )}
        </AnimatePresence>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
