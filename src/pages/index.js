import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SkillSets from "../components/skill-sets"
import Employments from "../components/employments"
import Contact from "../components/contact"

const IndexPage = () => {
  const { dataYaml } = useStaticQuery(
    graphql`
      query {
        dataYaml {
          banner {
            description
            name
          }
          skillSets {
            name
            skills
          }
          employments {
            title
            company
            companyUrl
            range
            jobs
            achievements
          }
          project {
            description
            name
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Satria H R Harsono" />
      <Banner banner={dataYaml.banner} />

      <SkillSets skillSets={dataYaml.skillSets} />

      <Employments employments={dataYaml.employments} />

      <Contact />
    </Layout>
  )
}

export default IndexPage
