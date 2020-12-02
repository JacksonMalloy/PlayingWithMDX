import { Link } from 'gatsby'
import React from 'react'
import Image from './image'

import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'

const Header = (): React.ReactElement => {
  const config = {
    delta: 10, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  // Consider moving this to layout and then playing with context to open drawer for menu?
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log('User Swiped!', eventData),
    ...config,
  })
  return (
    <StyledHeader {...handlers}>
      <Link to="/posts" className="posts">
        /posts
      </Link>
      <Link to="/projects" className="projects">
        /projects
      </Link>
      <Link to="/" className="image">
        <Image />
      </Link>
      <Link to="/work" className="work">
        /work
      </Link>
      <Link to="/contact" className="contact">
        /contact
      </Link>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 2rem;

  .image {
    grid-column: 4 / 4;
    justify-self: center;
    grid-row: 1 / 3;
    align-self: center;
    padding: 1rem;
  }

  a {
    padding: 1rem;
  }

  .posts {
    grid-column: 1 / 2;
    grid-row: 1 / 1;
  }

  .contact {
    grid-column: 1 / 2;
    grid-row: 2 / 2;
  }

  .projects {
    grid-column: 2 / 3;
    grid-row: 1 / 1;
  }

  .work {
    grid-column: 2 / 3;
    grid-row: 2 / 2;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;

    .posts {
      grid-column: 1 / 2;
      grid-row: 1 / 1;
    }

    .contact {
      grid-column: 1 / 2;
      grid-row: 2 / 2;
    }

    .projects {
      grid-column: 3 / 3;
      grid-row: 1 / 1;
    }

    .work {
      grid-column: 3 / 3;
      grid-row: 2 / 2;
    }

    .image {
      grid-column: 2 / 3;
      justify-self: center;
      grid-row: 1 / 3;
      align-self: center;
      padding: 1rem;
    }
  }

  @media (max-width: 760px) {
    margin-bottom: 1rem;

    a {
      padding: 1rem;
      font-size: 3rem;
    }
  }

  @media (max-width: 610px) {
    margin-bottom: 0rem;

    .posts,
    .contact,
    .projects,
    .work {
      display: none;
    }

    .image {
      grid-column: 1 / 2;
      justify-self: center;
      grid-row: 1 / 3;
      align-self: center;
      padding: 1rem;
    }
  }
`
