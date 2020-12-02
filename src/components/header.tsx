import { Link } from 'gatsby'
import React from 'react'
import Image from './image'

import styled from 'styled-components'

const Header = (): React.ReactElement => (
  <StyledHeader>
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
`
