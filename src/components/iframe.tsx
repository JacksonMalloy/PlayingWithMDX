import React from 'react'
import styled from 'styled-components'

export const IFrame = ({ source, title }) => {
  return (
    <StyledIFrameContainer>
      <iframe
        title={title}
        src={source}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </StyledIFrameContainer>
  )
}

const StyledIFrameContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`
