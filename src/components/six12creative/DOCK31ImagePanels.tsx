import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

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

    const styles = { maxHeight: '523px' }

    return (
      <StyledImageGrid>
        <Img fluid={data.ECImage.childImageSharp.fluid} style={styles} />
        <Img fluid={data.QCImage.childImageSharp.fluid} style={styles} />
        <Img fluid={data.USImage.childImageSharp.fluid} style={styles} />
        <Img fluid={data.HDImage.childImageSharp.fluid} style={styles} />
      </StyledImageGrid>
    )
  }

  return <Image />
}

const StyledImageGrid = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;

  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: 1fr 1fr;
`
