import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useUI } from '../Context'
import { ExternalLink } from './externalLink'
import Image from './image'

import styled from 'styled-components'

const StyledImage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  @media (max-width: 700px) {
    justify-content: center;
    padding: 0rem;
  }
`

export const About = () => {
  const { openToast } = useUI()

  useEffect(() => {
    const message = 'Swipe ➡ for menu'
    const variant = 'SUCCESS'

    openToast(message, variant)
  }, [])

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
      <StyledImage>
        <Image />
      </StyledImage>
      <h1>{sayHello()}</h1>

      <blockquote>
        Welcome to my{' '}
        <span role="img" aria-label="pizza">
          🍕
        </span>{' '}
        of the web! Here you'll find information about me, my work and a few tips and tricks I've learned along the way.
      </blockquote>
      <h4 style={{ marginBottom: '0rem' }}>Who am I?</h4>
      <p>
        <br />
        My name is Jacks. I'm an experienced full stack web developer from Vancouver BC with a specialty in JavaScript &
        TypeScript. Writing React.js is my most practiced skill in the JavaScript ecosystem. I most enjoy writing
        React.js within a framework such as <ExternalLink to={'https://nextjs.org/'}>Next.js</ExternalLink> or{' '}
        <ExternalLink to={'https://www.gatsbyjs.com/'}>Gatsby.js</ExternalLink>
        . I'm also very engaged in the GraphQL ecosystem.
        <br />
        <br />
        Web development, music and soccer are my favourite things to do in my spare time. I play soccer semi
        professionally as a center midfielder for the{' '}
        <ExternalLink to={'https://www.instagram.com/mafctigers/'}>
          Burnaby Metro Atheltic Premier Soccer club
        </ExternalLink>{' '}
        in Vancouver. I also produce music at{' '}
        <ExternalLink to={'https://soundcloud.com/moonmelt'}>Moonmelt</ExternalLink> with{' '}
        <ExternalLink to={'https://www.linkedin.com/in/moonmelt/'}>Alexander Reid</ExternalLink>
        .
        <br />
        <br />
        Have a great day!
      </p>
      <h4>
        Thanks for visiting!{' '}
        <span role="img" aria-label="smile">
          😊
        </span>
      </h4>
      <p>
        {' '}
        Happy you've read this far. If you'd like to get in touch you can reach me <Link to="/contact">here</Link>.
      </p>
    </section>
  )
}
