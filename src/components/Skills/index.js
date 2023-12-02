import {
  Container,
  Wrapper,
  Title,
  Desc,
  SkillsContainer,
  Skill,
  SkillTitle,
  SkillList,
  SkillItem,
  SkillImage,
} from "./SkillsStyle";
import React from "react";
import { skills } from "../../data/constants";
import { motion } from "framer-motion";

const Skills = () => {
  const skillvariants = {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.1,
    },
  };

  return (
    <Container id="skills">
      <Wrapper>
        <motion.div
          whileInView={skillvariants}
          initial={{ y: "-10%", opacity: 0 }}
        >
          <Title>Skills</Title>
          <Desc>
            The skills mentioned here showcase what I learned and refined during
            my bachelor's program, covering self-automation, academic pursuits,
            and personal projects.
          </Desc>
        </motion.div>
        <motion.div
          whileInView={skillvariants}
          initial={{ y: "-3%", opacity: 0 }}
        >
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem>
                      <SkillImage src={item.image} />
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Skills;
