import React from 'react'
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <p>This is about Next.js!</p>
  </Layout>
)

AboutPage.getInitialProps = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 500)
  })
  return {}
}

export default AboutPage