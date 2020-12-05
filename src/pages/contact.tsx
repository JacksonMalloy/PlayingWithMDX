import React, { useEffect, useRef } from 'react'
import { Form } from '../components/contact/form'
import Layout from '../Layout'
import styled from 'styled-components'
import { Message } from '../components/contact/message'

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  aside {
    grid-column: 1/ 2;
    align-self: center;
    text-align: center;
  }

  form {
    grid-column: 2 / 3;
  }
`

const ContactPage = () => {
  const bottom = useRef(null)

  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [])

  return (
    <Layout viewportLimit="1920px">
      <StyledGrid>
        <Message bottom={bottom} />
        <Form />
      </StyledGrid>
    </Layout>
  )
}

export default ContactPage
