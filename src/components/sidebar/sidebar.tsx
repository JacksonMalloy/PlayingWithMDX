import React from 'react'
import { pExtract } from '../../createMediaQuery'
import styled from 'styled-components'
import { Twitter } from '../twitter'
import { LinkedIn } from '../linkedin'
import { Facebook } from '../facebook'
import { TreeNavigation } from './tree'
import { getTreeItems } from './getTreeItems'

const StyledSidebar = styled.aside`
  padding-top: 3.5rem;

  section {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: row;
    background-color: var(--primary);
    padding: var(--space);
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: 'Source Sans Pro Black';
    overflow-y: auto;
  }

  h3 {
    padding: 0;
    margin: 0;
    width: 1000px;
    height: 100%;
    /* top: 150px;
    right: 42%; */
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);

    height: 300;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: var(--space);
  }

  a {
    padding: 1rem;
    width: 100%;
    ${pExtract()}
  }

  li {
    padding: 0.4rem;
    grid-column: 2 / 3;
  }
`

const Sidebar = ({ data }) => {
  const items = getTreeItems(data)

  return (
    <StyledSidebar>
      <section>
        {/* <ul>
          <li>
            <Twitter />
          </li>
          <li>
            <LinkedIn />
          </li>
          <li>
            <Facebook />
          </li>
        </ul> */}
        <div>
          <TreeNavigation items={items} />
        </div>
      </section>
    </StyledSidebar>
  )
}

export default Sidebar
