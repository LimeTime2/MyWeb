import React from 'react'
import styled from 'styled-components'
import { skills } from '../Constants/constants'

const Skills = () => {
    return (
        <Container id="skills">
            <Title>Skills</Title>
            <Desc>
                Here are some of my skills on which I have been working in the past
            </Desc>
            <SkillsContainer>
                {skills.map((item) => (
                    <Skill key={item.title}>
                        <SkillTitle>{item.title}</SkillTitle>
                        <SkillList>
                            {item.skills.map((skill) => (
                                <HighlightedSkill>
                                    <SkillImage src={skill.image} alt={skill.name} />
                                    {skill.name}
                                </HighlightedSkill>
                            ))}
                        </SkillList>
                    </Skill>
                ))}
            </SkillsContainer>
        </Container>
    )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, #800080, #000000);
  height:400px;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #ffffff;
`

export const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  margin-top:10px;
  color: #ffffff;
`

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;

`

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
`

export const SkillList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap:15px;
`

export const SkillImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: center;
`

export const HighlightedSkill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  color: ${props => props.highlighted ? "yellow" : "white"};
`

export default Skills
