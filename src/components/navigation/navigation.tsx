import React from 'react'
import { h3FontSizes, h4FontSizes, h5FontSizes, pFontSizes } from '../../createMediaQuery'
import styled from 'styled-components'
// import { Twitter } from '../socials/twitter'
// import { LinkedIn } from '../linkedin'
// import { Facebook } from '../facebook'
import { TreeNavigation } from './treeNavigation'
import { useSwipe } from '../drawer/useSwipe'
import { useNavigation } from './useNavigation'
import { useUI } from '../../Context'

const StyledNavigation = styled.aside`
  padding-top: 3.5rem;

  @media (max-width: 700px) {
    padding-top: 0px;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem;
    margin: 1rem;
    background-color: transparent;
    border: none;

    @media (min-width: 700px) {
      display: none;
      pointer-events: none;
    }
  }

  section {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    padding: ${({ drawer }) => (drawer ? 0 : 'var(--space)')};
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: 'Source Sans Pro Black';
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: ${({ drawer }) => (drawer ? '8rem' : 'var(--space)')};
  }

  a {
    padding: 1rem;
    width: 100%;
    ${({ drawer }) => (drawer ? h5FontSizes() : pFontSizes())}
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    opacity: 1;
    transition: opacity 0.1s;
    font-family: 'Source Sans Pro Black';

    small {
      font-size: 0.5rem;
      margin: 0;
      font-family: 'Source Sans Pro Black';
    }

    span {
      @media (min-width: 700px) {
        margin-top: -15px;
      }
      font-family: 'Source Sans Pro Black';
    }

    &:hover {
      background: var(--text-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-decoration: underline;
    }

    &:focus {
      outline: none;
      color: var(--text);
      opacity: 0.8;
      transition: opacity 0.1s;
      text-decoration: underline;
    }
  }

  .depth-0 {
    &:hover {
      background: var(--text-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

const Navigation = ({ drawer }) => {
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
    <StyledNavigation {...handlers} drawer={drawer}>
      <section>
        <TreeNavigation items={items} />
      </section>
      <button onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </StyledNavigation>
  )
}

export default Navigation
