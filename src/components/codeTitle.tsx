import React from 'react'
import styled from 'styled-components'

const StyledTitleContainer = styled.header`
  background-color: rgb(214, 222, 235);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledText = styled.h2`
  margin: 0px;
  color: black;
`

const StyledLanguageTag = styled.div`
  padding: 5px;
  color: black;
  border-radius: 4px;
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
      <StyledText>{text}</StyledText>
      <StyledLanguageTag>{children}</StyledLanguageTag>
    </StyledTitleContainer>
  )
}
export default Title
