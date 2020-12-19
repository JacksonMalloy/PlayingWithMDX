import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

export const DOCK31ImagePanels = () => {
  const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        ECImage: file(relativePath: { eq: "six12creative/31-days-of-ck/ec-31dock.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        QCImage: file(relativePath: { eq: "six12creative/31-days-of-ck/qc-31dock.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        USImage: file(relativePath: { eq: "six12creative/31-days-of-ck/us-31dock.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        HDImage: file(relativePath: { eq: "six12creative/31-days-of-ck/hd-31dock.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    console.log({ data })

    const styles = { maxWidth: '23%', width: '25%', maxHeight: '523px', height: '100%' }

    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <Img fluid={data.ECImage.childImageSharp.fluid} style={styles} />
        <Img fluid={data.QCImage.childImageSharp.fluid} style={styles} />
        <Img fluid={data.USImage.childImageSharp.fluid} style={styles} />
        <Img fluid={data.HDImage.childImageSharp.fluid} style={styles} />
      </div>
    )
  }

  return <Image />
}
