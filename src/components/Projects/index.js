import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import React, { useState } from "react";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import { motion } from "framer-motion";

const Projects = ({ openModal, setOpenModal }) => {
  const prjtvariants = {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.1,
    },
  };
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <motion.div
          whileInView={prjtvariants}
          initial={{ y: "-10%", opacity: 0 }}
        >
          <Title>Projects</Title>
          <Desc>
            I've been involved in various projects, ranging from internship
            applications to personal projects. Here are some examples.
          </Desc>
        </motion.div>
        <motion.div
          whileInView={prjtvariants}
          initial={{ y: "-5%", opacity: 0 }}
        >
          <ToggleButtonGroup>
            {toggle === "all" ? (
              <ToggleButton active value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            ) : (
              <ToggleButton value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            )}
            <Divider />
            {toggle === "internship app" ? (
              <ToggleButton
                active
                value="internship app"
                onClick={() => setToggle("internship app")}
              >
                INTERNSHIP APPS
              </ToggleButton>
            ) : (
              <ToggleButton
                value="internship app"
                onClick={() => setToggle("internship app")}
              >
                INTERNSHIP APPS
              </ToggleButton>
            )}
            <Divider />
            {toggle === "personal app" ? (
              <ToggleButton
                active
                value="personal app"
                onClick={() => setToggle("personal app")}
              >
                PERSONAL APPS
              </ToggleButton>
            ) : (
              <ToggleButton
                value="personal app"
                onClick={() => setToggle("personal app")}
              >
                PERSONAL APPS
              </ToggleButton>
            )}
          </ToggleButtonGroup>
        </motion.div>
        <motion.div
          whileInView={prjtvariants}
          initial={{ y: "-3%", opacity: 0 }}
        >
          <CardContainer>
            {toggle === "all" &&
              projects.map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </CardContainer>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Projects;
