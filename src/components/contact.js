import React from "react"
import module from "./contact.module.scss"
import { CenterContainer } from "./main"
import CopyText from "react-copy-text"

export default class Contact extends React.Component {
  state = { textToCopy: "" }

  onButtonClick = () => this.setState({ textToCopy: "satriahrh@gmail.com" })
  onCopied = text => console.log(`${text} was copied to the clipboard`)

  render() {
    const email = "satriahrh<at>gmail<dot>com"
    return (
      <section className={module.contact}>
        <CenterContainer>
          <h2>
            <strike>Hire</strike> Contact Me :p
          </h2>{" "}
          <a
            id="email"
            className={module.link}
            href={"#email"}
            onClick={this.onButtonClick}
          >
            {email}
          </a>
          <CopyText text={this.state.textToCopy} onCopied={this.onCopied} />
        </CenterContainer>
      </section>
    )
  }
}
