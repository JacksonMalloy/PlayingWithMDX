/** @jsx jsx */
import styled from 'styled-components'

const StyledTitleContainer = styled.div`
  background-color: #d2c7ec;
  padding: 10px;
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
  color: white;
  border-radius: 4px;
`
const Title = (props) => {
  const { text, children, className } = props
  return (
    <StyledTitleContainer className={className}>
      <StyledText>{text}</StyledText>
      <StyledLanguageTag>{children}</StyledLanguageTag>
    </StyledTitleContainer>
  )
}
export default Title
