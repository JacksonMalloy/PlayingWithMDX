import React from 'react'
import { pExtract } from '../../createMediaQuery'
import styled from 'styled-components'
// import { Twitter } from '../socials/twitter'
// import { LinkedIn } from '../linkedin'
// import { Facebook } from '../facebook'
import { TreeNavigation } from './treeNavigation'
import { getTreeItems } from './getTreeItems'
import { useSwipe } from '../useSwipe'
import { useNavigation } from './useNavigation'

const StyledNavigation = styled.aside`
  padding-top: 3.5rem;

  section {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    padding: var(--space);
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: 'Source Sans Pro Black';
    overflow-y: auto;
  }

  a {
    padding: 1rem;
    width: 100%;
    ${pExtract()}
  }
`

const Navigation = () => {
  const items = useNavigation()
  const { handlers } = useSwipe()

  return (
    <StyledNavigation {...handlers}>
      <section>
        <TreeNavigation items={items} />
      </section>
    </StyledNavigation>
  )
}

export default Navigation
