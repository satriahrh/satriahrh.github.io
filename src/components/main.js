import React from "react"

import module from "./main.module.scss"

const CenterContainer = ({ children }) => (
  <div className={module.center}>{children}</div>
)

export { CenterContainer }
