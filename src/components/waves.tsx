import React from 'react'
import styled from 'styled-components'
import Wave from './wave'

const StyledWaves = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 3980px;
  height: 3980px;
  overflow: hidden;

  transform: ${(props) => (props.flip ? `rotate(180deg)` : `rotate(0deg)`)};
  grid-row: ${(props) => (props.flip ? `4 / 6` : `1 / 3`)};
  grid-column: 1;
  pointer-events: none;
  z-index: -9999;
  background-color: var(--primary);

  animation-duration: 0.5s;
  animation-name: fade;
  animation-timing-function: ease-in-out;

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .wave-1 {
    opacity: 0.1;
    position: absolute;
    right: -200px;
    bottom: 0;
    top: 300px;
    height: 1980px;
    width: 2980px;
    fill: var(--wave-primary-color);
    @media (max-width: 775px) {
      top: 0px;
    }
  }

  .wave-2 {
    opacity: 0.2;
    position: absolute;
    right: -600px;
    bottom: 0;
    top: 300px;
    height: 1980px;
    width: 2980px;
    fill: var(--wave-primary-color);
    @media (max-width: 775px) {
      top: 0px;
    }
  }

  .wave-3 {
    opacity: 0.3;
    position: absolute;
    right: -1100px;
    bottom: 0;
    top: 300px;
    height: 1980px;
    width: 2980px;
    fill: var(--wave-primary-color);
    @media (max-width: 775px) {
      top: 0px;
    }
  }
`

const Waves = () => {
  return (
    <StyledWaves>
      <Wave
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.15,
          points: 5,
        }}
        className="wave-1"
      />
      <Wave
        options={{
          height: 90,
          amplitude: 30,
          speed: 0.15,
          points: 5,
        }}
        className="wave-2"
      />
      <Wave
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.15,
          points: 5,
        }}
        className="wave-3"
      />
    </StyledWaves>
  )
}

export default Waves
