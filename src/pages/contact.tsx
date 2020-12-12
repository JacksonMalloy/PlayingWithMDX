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

  p {
    margin: 0;
  }

  a {
    padding: 0.2rem;
  }

  label {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  @media (max-width: 700px) {
    label {
      padding: 0.5rem;

      span {
        padding: 0.5rem 0;
      }
    }
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
