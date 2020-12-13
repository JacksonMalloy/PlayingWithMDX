import React from 'react'
import { Form } from '../components/contact/form'
import Layout from '../Layout'
import styled from 'styled-components'
import { Message } from '../components/contact/message'

const StyledContact = styled.section`
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

  svg {
    width: 10%;
  }

  .left-key {
    background-color: transparent;
    border: none;
    height: 100%;
    width: 10%;
  }
`

const ContactPage = () => {
  return (
    <Layout viewportLimit="1920px" isContact>
      <StyledContact>
        <Message />
        <Form />
      </StyledContact>
    </Layout>
  )
}

export default ContactPage
