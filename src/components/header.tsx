import { Link } from 'gatsby'
import React from 'react'

type HeaderTypes = { siteTitle: string }

const Header = ({ siteTitle }: HeaderTypes): React.ReactElement => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          sup
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
