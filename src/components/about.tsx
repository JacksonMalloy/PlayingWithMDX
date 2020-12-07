import React, { useEffect } from 'react'
import { SwipeEventData, useSwipeable } from 'react-swipeable'
import { useUI } from '../Context'

export const About = () => {
  const { openNavigation, openToast } = useUI()

  useEffect(() => {
    const message = 'Swipe ➡ for menu'
    const variant = 'SUCCESS'

    openToast(message, variant)
  }, [])

  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const handleLeftSwipe = (eventData: SwipeEventData) => {
    if (eventData.dir === 'Right') {
      console.log('opened')
      openNavigation()
    }
  }

  const handlers = useSwipeable({
    onSwiped: (eventData) => handleLeftSwipe(eventData),
    ...config,
  })

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
    <section {...handlers} className="container">
      <h1>{sayHello()}</h1>

      <blockquote>
        Welcome to my domain! Here you'll find information about me, my work and a few tips and tricks to help other
        developers navigate the modern web.
      </blockquote>

      <p>
        As a firm believer in the future of the web, I have become vehemently obsessed with web technologies. From the
        countless hours I've spent studying about the web, I'm happy to call this one of my passions.
        <br />
        <br />
        My name is Jacks, and I'm an experienced full stack web developer from Vancouver BC. My specialty is with
        JavaScript/TypeScript - it's what study and write nearly every single day. Writing React.js is my most practiced
        skill in the JavaScript ecosystem. While I most enjoy writing React.js, other frameworks I'm familiar with are
        Angular and Svelte. I'm also very engaged in the GraphQL ecosystem.
        <br />
        <br />
        Web development, music and soccer are my favourite things to do in my spare time. I'm a very competitive person.
        I'm always up for a challenge. Perhaps it's why I'm so obsessed with learning about things that others have
        troubles understanding. There's something about diving "under the hood", destructuring the very architecture to
        understand technology, that I enjoy very much.
        <br />
        <br />
        Happy you've read this far. I'm looking for opportunity and more work. If you're looking for an experience full
        stack devloper who lives in the React ecosystem I think I could really help! Regardless, if you'd just like to
        chat drop me a message here.
        <br />
        <br />
        Thanks for reading, Have a great day!
      </p>
    </section>
  )
}
