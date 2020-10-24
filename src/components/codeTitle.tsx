import React from 'react'
import styled from 'styled-components'

const StyledTitleContainer = styled.header`
  background-color: rgb(1, 22, 39);
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Source Sans Pro';
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

const StyledText = styled.h6`
  font-size: 1rem;
  color: rgb(214, 222, 235);
  padding: 0 0.5rem;
  font-family: 'Source Sans Pro';
`

const StyledLanguageTag = styled.h6`
  color: rgb(214, 222, 235);
  padding: 0 0.5rem;
  border-radius: 4px;
  font-family: 'Source Sans Pro';
`

type CodeTitleProps = {
  text: string
  children: React.ReactChildren
  className: string
}

const Title = (props: CodeTitleProps) => {
  const { text, children, className } = props
  return (
    <StyledTitleContainer className={className}>
      <StyledLanguageTag>{children}</StyledLanguageTag>

      <StyledText>{text}</StyledText>
    </StyledTitleContainer>
  )
}
export default Title
