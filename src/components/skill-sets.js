import React from "react"
import PropTypes from "prop-types"
import module from './skill-sets.module.scss'

import {CenterContainer} from "./main"

const SkillSets = ({ skillSets }) => {
  const skills = skillSets.map(skill => {
    const skillItems = skill.skills.map(item => (
      <span style={{ marginLeft: "3px", marginRight: "3px" }}>{item}</span>
    ))
    return (
      <li>
        <strong>{skill.name}</strong>
        <br />
        <span>{skillItems}</span>
      </li>
    )
  })
  return (
    <section className={module.skillSets}>
      <CenterContainer>
        <h2>What Can I Do?</h2>
        <p>Here are few things why you (as tech recruiter) should care me about.</p>
        <ul>{skills}</ul>
      </CenterContainer>
    </section>
  )
}

SkillSets.propTypes = {
  skillSets: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
    })
  ),
}

SkillSets.defaultProps = {
  skillSets: [
    {
      name: "Programming Language",
      skills: ["Go", "Ruby", "Javascrip"],
    },
  ],
}

export default SkillSets
