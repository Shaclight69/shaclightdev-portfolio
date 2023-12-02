import {
  Container,
  Wrapper,
  Title,
  Desc,
  TimelineSection,
} from "./ExperienceStyle";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";
import { motion } from "framer-motion";

const index = () => {
  const expvariants = {
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
          whileInView={expvariants}
          initial={{ y: "-10%", opacity: 0 }}
        >
          <Title>Experience</Title>
          <Desc>
            My work experience as a software developer, engaging in internships
            across diverse enterprises and building projects.
          </Desc>
        </motion.div>
        <motion.div
          whileInView={expvariants}
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
