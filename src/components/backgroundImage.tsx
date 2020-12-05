import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const StyledBackgroundImage = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  img {
    object-fit: cover;
  }
`

export const BackgroundImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pia23121-16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage2: file(relativePath: { eq: "pia23865-spitzer-w51.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  const randomizeImages = () => {
    function randomInteger(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    if (randomInteger(1, 10) > 5) {
      return data.placeholderImage.childImageSharp.fluid
    } else {
      return data.placeholderImage2.childImageSharp.fluid
    }
  }

  return (
    <StyledBackgroundImage>
      <Img fluid={randomizeImages()} />
    </StyledBackgroundImage>
  )
}
