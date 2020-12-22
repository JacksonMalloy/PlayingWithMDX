import React, { ReactChild } from 'react'
import styled from 'styled-components'
import { useSwipe } from './components/drawer/useSwipe'

const StyledContainer = styled.section`
  max-width: 1920px;
  width: 100%;
`

interface IContainerProps {
  children: ReactChild | ReactChild[]
}

const Container = ({ children }: IContainerProps) => {
  const { handlers } = useSwipe()

  return <StyledContainer {...handlers}>{children}</StyledContainer>
}

export default Container
