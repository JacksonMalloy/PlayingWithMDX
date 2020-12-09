import React from 'react'
import styled from 'styled-components'
import { useSwipe } from './components/drawer/useSwipe'

const StyledContainer = styled.section`
  max-width: ${({ viewportLimit }) => viewportLimit || '1920px'};
  width: 100%;
`

const Container = ({ children, viewPortLimit }) => {
  const { handlers } = useSwipe()

  return (
    <StyledContainer viewPortLimit={viewPortLimit} {...handlers}>
      {children}
    </StyledContainer>
  )
}

export default Container
