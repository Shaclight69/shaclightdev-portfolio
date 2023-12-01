import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const index = () => {
  const skillEffect = {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.1,
    },
  };
  return (
    <Container id="experience">
      <Wrapper>
        <motion.div
          whileInView={skillEffect}
          initial={{ y: "-10%", opacity: 0 }}
        >
          <Title>Experience</Title>
          <Desc>
            My work experience as a software engineer and working on different
            companies and projects.
          </Desc>
        </motion.div>
        <motion.div
          whileInView={skillEffect}
          initial={{ y: "-3%", opacity: 0 }}
        >
          {" "}
          <TimelineSection>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="info" />
                    {index !== experiences.length - 1 && (
                      <TimelineConnector
                        style={{ background: "rgb(0,168,123,1)" }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineSection>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default index;
