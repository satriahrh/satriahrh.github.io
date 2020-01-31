import React from "react"
import PropTypes from "prop-types"

import {CenterContainer} from "./main"

const Employments = ({ employments }) => {
  const employmentsMaterial = employments.map(employment => {
    const jobs = employment.jobs.map(job => <li dangerouslySetInnerHTML={{__html: job}}/>)
    const achievements = employment.achievements.map(achievement => <li dangerouslySetInnerHTML={{__html: achievement}}/>)
    return (
      <div>
        <h3>
          {employment.title} at <a href={employment.companyUrl}>{employment.company}</a>
        </h3>
        <p>{employment.range}</p>
        <p>What I did there
          <ul>{jobs}</ul>
        </p>
        <p>My <strong>achievements</strong> I am proud of
          <ul>{achievements}</ul>
        </p>

      </div>
    )
  })
  return (
    <section>
      <CenterContainer>
        <h2>My Employments</h2>
        <p>Bellow are companies I have worked for so far.</p>
        {employmentsMaterial}

      </CenterContainer>
    </section>
  )
}

Employments.propTypes = {
  employments: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      company: PropTypes.string,
      companyUrl: PropTypes.string,
      range: PropTypes.string,
      jobs: PropTypes.arrayOf(PropTypes.string),
      achievements: PropTypes.arrayOf(PropTypes.string),
    })
  ),
}

Employments.defaultProps = {
  employments: [
    {
      title: "Software Development Engineer",
      company: "Bukalapak",
      companyUrl: "bukalapak.com",
      range: "August 2018 - present",
      jobs: ["Building high quality API", "Maintaining high demands services"],
      achievements: ["Building high quality API", "Maintaining high demands services"],
    },
  ],
}

export default Employments
