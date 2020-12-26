import React from 'react'
import { h5FontSizes, pFontSizes } from '../../createMediaQuery'
import styled from 'styled-components'
// import { Twitter } from '../socials/twitter'
// import { LinkedIn } from '../linkedin'
// import { Facebook } from '../facebook'
import { TreeNavigation } from './treeNavigation'
import { useSwipe } from '../drawer/useSwipe'
import { useNavigation } from './useNavigation'
import { useUI } from '../../Context'
import { useNotification } from './useNotification'

interface INavigation {
  drawer?: boolean
}

const StyledNavigation = styled.aside`
  padding-top: 3.5rem;
  background-color: transparent;

  section {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding: ${({ drawer }: INavigation) => (drawer ? 0 : 'var(--space)')};
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: 'Source Sans Pro Black';
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: ${({ drawer }) => (drawer ? '8rem' : 'var(--space)')};
  }

  @media (max-width: 775px) {
    padding-top: 2rem;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem;
    margin: 1rem;
    background-color: transparent;
    border: none;

    @media (min-width: 775px) {
      display: none;
      pointer-events: none;
    }
  }

  .depth-0 {
    color: var(--text);

    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--link-primary);
    }
  }

  .depth-0,
  .depth-1,
  .depth-2 {
    padding: 0.5rem;
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
      @media (min-width: 775px) {
        margin-top: -15px;
      }
      font-family: 'Source Sans Pro Black';
    }

    &:hover {
      small {
        color: var(--link-primary);
      }

      span {
        text-decoration: underline;
        text-decoration-color: var(--link-primary);
      }
    }

    &:focus {
      color: var(--text);
      outline: none;

      small {
        color: var(--link-primary);
      }

      span {
        text-decoration: underline;
        text-decoration-color: var(--link-primary);
      }
    }
  }

  .active {
    color: var(--link-primary);

    span {
      text-decoration: underline;
      text-decoration-color: var(--link-primary);
    }

    small {
      color: var(--link-primary);
    }
  }
`

const Navigation = ({ drawer }: INavigation) => {
  const items = useNavigation()
  const { handlers } = useSwipe()
  const { setDrawerPosition, setNavCount, navCount } = useUI()

  const handleClick = () => {
    setNavCount(navCount + 1)
    setDrawerPosition({ isOpen: false, sliding: true, dir: 'LEFT' })
    setTimeout(() => {
      setDrawerPosition({ isOpen: false, sliding: false, dir: 'LEFT' })
    }, 50)
  }

  useNotification()

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
          style={{ cursor: 'pointer' }}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </StyledNavigation>
  )
}

export default Navigation
