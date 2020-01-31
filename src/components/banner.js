import React from "react"
import PropTypes from "prop-types"
import module from "./banner.module.scss"

import {CenterContainer} from "./main"

const Banner = ({ banner }) => {
  return (
    <div className={module.banner}>
      <CenterContainer>
        <h1 className={module.name}>{banner.name}</h1>
        <p className={module.description}>{banner.description}</p>
        <a className={module.link} href={"https://satriahrh.github.io/blog"}>Visit my Blog</a>
      </CenterContainer>
    </div>
  )
}

Banner.propTypes = {
  banner: PropTypes.exact({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
}

Banner.defaultProps = {
  banner: {
    name: "John Doe",
    description: "The description is goes here.",
  },
}

export default Banner
