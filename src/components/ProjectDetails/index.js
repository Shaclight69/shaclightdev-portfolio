import {
  Container,
  Wrapper,
  Image,
  Title,
  Date,
  Tags,
  Tag,
  Desc,
  ButtonGroup,
  Button,
} from "./ProjectDetailsStyle";
import { CloseRounded } from "@mui/icons-material";
import { Grow, Modal } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
      closeAfterTransition
    >
      <Container>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 900 } : {})}
        >
          <Wrapper>
            <CloseRounded
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                cursor: "pointer",
              }}
              onClick={() => setOpenModal({ state: false, project: null })}
            />
            <Image src={project?.image} />
            <Title>{project?.title}</Title>
            <Date>{project.date}</Date>
            <Tags>
              {project?.tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </Tags>
            <Desc>{project?.description}</Desc>
            <ButtonGroup>
              {project?.webapp ? (
                <>
                  <Button dull href={project?.github} target="new">
                    View Code <GitHubIcon style={{ marginLeft: "0.5rem" }} />
                  </Button>
                  <Button href={project?.webapp} target="new">
                    View Live App{" "}
                    <LanguageIcon style={{ marginLeft: "0.5rem" }} />
                  </Button>
                </>
              ) : (
                <>
                  <Button href={project?.github} target="new">
                    View Code <GitHubIcon style={{ marginLeft: "0.5rem" }} />
                  </Button>
                </>
              )}
            </ButtonGroup>
          </Wrapper>
        </Grow>
      </Container>
    </Modal>
  );
};

export default index;
