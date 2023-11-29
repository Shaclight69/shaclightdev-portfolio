import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  GButton,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImageI.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { IoDocumentText } from "react-icons/io5";
import GitHubIcon from "@mui/icons-material/GitHub";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>{Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <div style={{ display: "flex" }}>
              <ResumeButton href={Bio.resume} target="display">
                Resume
                <IoDocumentText
                  style={{ fontSize: "1.7rem", marginLeft: "0.2rem" }}
                />
              </ResumeButton>
              <GButton>
                Github{" "}
                <GitHubIcon
                  style={{ fontSize: "1.7rem", marginLeft: "0.2rem" }}
                />
              </GButton>
            </div>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
