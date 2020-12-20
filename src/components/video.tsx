import React from 'react'
import styled from 'styled-components'

const StyledVideoPlayer = styled.video`
  width: 100%;
  max-height: 100%;
  margin-bottom: 2rem;
`

export default function Video({ source }) {
  return (
    <StyledVideoPlayer controls muted preload="auto">
      <source src={source} type="video/mp4" />
      <p>Your browser does not support HTML5 video.</p>
    </StyledVideoPlayer>
  )
}
