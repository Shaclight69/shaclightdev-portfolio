import React from "react";
import { useState } from "react";
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
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I've been involved in various projects, ranging from internship
          applications to personal projects. Here are some examples.
        </Desc>
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
      </Wrapper>
    </Container>
  );
};

export default Projects;
