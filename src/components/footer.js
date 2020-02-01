import React from "react"
import module from "./footer.module.scss"

const Footer = () => (
  <footer className={module.footer}>
    <div className={module.social}>
      <a href={"https://linkedin.com/in/satriahrh"}>
        <i className="lab la-linkedin" />
      </a>
      <a href={"https://github.com/satriahrh"}>
        <i className="lab la-github" />
      </a>
      <a href={"https://twitter.com/satriahrh"}>
        <i className="lab la-twitter" />
      </a>
      <a href={"https://instagram.com/satriahrh"}>
        <i className="lab la-instagram" />
      </a>
    </div>
    <div className={module.copy}>
      <a href="https://satriahrh.github.io">satriahrh.github.io © 2020</a>
    </div>
  </footer>
)

export default Footer
