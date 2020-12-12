import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useUI } from '../Context'

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
      return 'Good Morning! 🌞'
    }

    if (parseInt(dateTime) >= 12 && parseInt(dateTime) < 16) {
      return 'Good Afternoon! 🍲'
    }

    if ((parseInt(dateTime) >= 16 && parseInt(dateTime) <= 24) || parseInt(dateTime) < 4) {
      return 'Good Evening! 🌃'
    }
  }

  return (
    <section className="container">
      <h1>{sayHello()}</h1>

      <blockquote>
        Welcome to my 🍕 of the web! Here you'll find information about me, my work and a few tips and tricks I've
        learned along the way.
      </blockquote>

      <p>
        <br />
        <h4 style={{ marginLeft: 0 }}>Who am I?</h4>
        My name is Jacks. I'm an experienced full stack web developer from Vancouver BC with a specialty in JavaScript &
        TypeScript. Writing React.js is my most practiced skill in the JavaScript ecosystem. I most enjoy writing
        React.js within a framework such as{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>{' '}
        or{' '}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby.js
        </a>
        . I'm also very engaged in the GraphQL ecosystem.
        <br />
        <br />
        Web development, music and soccer are my favourite things to do in my spare time. I play soccer semi
        professionally as a center midfielder for the{' '}
        <a href="https://www.instagram.com/mafctigers/" target="_blank" rel="noreferrer">
          Burnaby Metro Atheltic Premier Soccer club
        </a>{' '}
        in Vancouver. I also produce music at{' '}
        <a href="https://soundcloud.com/moonmelt" target="_blank" rel="noreferrer">
          Moonmelt
        </a>{' '}
        with{' '}
        <a href="https://www.linkedin.com/in/moonmelt/" target="_blank" rel="noreferrer">
          Alexander Reid
        </a>
        .
        <br />
        <br />
        <h4 style={{ marginLeft: 0 }}>Thanks for visiting! 😊</h4>
        Happy you've read this far. If you're looking for an experience full stack devloper, especially one with very
        strong React skills I think I would be a great fit! You can reach me <Link to="/contact">here</Link>
        .
        <br />
        <br />
        Have a great day!
      </p>
    </section>
  )
}
