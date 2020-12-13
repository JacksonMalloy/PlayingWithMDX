import React from 'react'
import { pFontSizes } from '../../createMediaQuery'
import styled from 'styled-components'
// import { Twitter } from '../socials/twitter'
// import { LinkedIn } from '../linkedin'
// import { Facebook } from '../facebook'
import { TreeNavigation } from './treeNavigation'
import { getTreeItems } from './getTreeItems'
import { useSwipe } from '../drawer/useSwipe'
import { useNavigation } from './useNavigation'
import { useUI } from '../../Context'

const StyledNavigation = styled.aside`
  padding-top: 3.5rem;

  @media (max-width: 700px) {
    padding-top: 0px;
  }

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
    overflow-x: hidden;

    button {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 1rem;
      margin: 1rem;

      @media (min-width: 700px) {
        display: none;
        pointer-events: none;
      }
    }
  }

  a {
    padding: 1rem;
    width: 100%;
    ${pFontSizes()}
  }
`

const Navigation = () => {
  const items = useNavigation()
  const { handlers } = useSwipe()
  const { setDrawerPosition } = useUI()

  const handleClick = () => {
    setDrawerPosition({ isOpen: false, sliding: true, dir: 'LEFT' })
    setTimeout(() => {
      setDrawerPosition({ isOpen: false, sliding: false, dir: 'LEFT' })
    }, 50)
  }

  return (
    <StyledNavigation {...handlers}>
      <section>
        <TreeNavigation items={items} />
        <button onClick={handleClick}>X</button>
      </section>
    </StyledNavigation>
  )
}

export default Navigation
