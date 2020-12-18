import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useUI } from '../Context'
import { ExternalLink } from './externalLink'
import Image from './image'

import styled from 'styled-components'

const StyledImage = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;

  @media (max-width: 700px) {
    justify-content: center;
    padding: 0rem;
  }
`

export const About = () => {
  const { openToast } = useUI()

  // useEffect(() => {
  //   const message = 'Swipe ➡ for menu'
  //   const variant = 'SUCCESS'

  //   openToast(message, variant)
  // }, [])

  const sayHello = () => {
    const date = new Date()

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const options = {
      hour: 'numeric',
      hourCycle: 'h24',
      timeZone: timezone,
    }

    // To use browsers default locale pass empty array
    const dateTime = new Intl.DateTimeFormat([], options).format(date)

    if (parseInt(dateTime) >= 4 && parseInt(dateTime) < 12) {
      return 'Good Morning! '
    }

    if (parseInt(dateTime) >= 12 && parseInt(dateTime) < 16) {
      return 'Good Afternoon! '
    }

    if ((parseInt(dateTime) >= 16 && parseInt(dateTime) <= 24) || parseInt(dateTime) < 4) {
      return 'Good Evening! '
    }
  }

  return (
    <section className="container">
      <h1>{sayHello()}</h1>

      <blockquote>
        Welcome to my{' '}
        <span role="img" aria-label="pizza">
          🍕
        </span>{' '}
        of the web! I'm a web developer from Vancouver BC focused on building end to end solutions for small to medium
        sized businesses. Looking for a developer? I'm looking for freelance work! You can read more about what I can
        offer <Link to="/work">here</Link> and contact me <Link to="/contact">here</Link>.
      </blockquote>
      <h4 style={{ marginBottom: '0rem' }}>Who am I?</h4>
      <StyledImage>
        <Image />
      </StyledImage>
      <p style={{ paddingTop: '2rem' }}>
        I'm Jackson, an experienced full stack developer from Vancouver BC with a specialty in JavaScript & TypeScript.
        Writing React code is my most practiced skill in the JavaScript ecosystem. I most enjoy building blazing fast
        modern websites with frameworks such as <ExternalLink to={'https://nextjs.org/'}>Next</ExternalLink> or{' '}
        <ExternalLink to={'https://www.gatsbyjs.com/'}>Gatsby</ExternalLink>.
      </p>
      <p>
        Web development, music and soccer are my passions. I play soccer semi professionally as a center midfielder for
        the{' '}
        <ExternalLink to={'https://www.instagram.com/mafctigers/'}>
          Burnaby Metro Atheltic Premier Soccer club
        </ExternalLink>{' '}
        in Vancouver. I also produce music at{' '}
        <ExternalLink to={'https://soundcloud.com/moonmelt'}>Moonmelt</ExternalLink> with{' '}
        <ExternalLink to={'https://www.linkedin.com/in/moonmelt/'}>Alexander Reid</ExternalLink>. I love to play the{' '}
        <ExternalLink to={'https://www.instagram.com/p/BAvLzSjtN6i/'}>guitar</ExternalLink> and{' '}
        <ExternalLink to="https://www.instagram.com/p/BUbSI3hlCmq/">piano</ExternalLink>, and have been doing so by ear,
        teaching myself music theory and best practices online for over a decade.
        <br />
        <br />
        Happy you've read this far. If you'd like to get in touch you can reach me <Link to="/contact">here</Link>.
      </p>
      <h4>
        Thanks for visiting!{' '}
        <span role="img" aria-label="smile">
          😊
        </span>
      </h4>
    </section>
  )
}
