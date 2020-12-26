import React from 'react'
import { Form } from '../components/contact/form'
import Layout from '../Layout'
import styled from 'styled-components'
import { Message } from '../components/contact/message'
import { graphql } from 'gatsby'
import { IMdxWithNodes } from '../Types'

interface IContentHook {
  data: {
    allDevPosts: IMdxWithNodes[]
    allWork: IMdxWithNodes[]
    allProjects: IMdxWithNodes[]
  }
}

const ContactPage = ({ data }: IContentHook) => {
  return (
    <Layout viewportLimit="1920px" isContact>
      <StyledContact>
        <Message />
        <Form projects={data.allProjects} work={data.allWork} devPosts={data.allDevPosts} />
      </StyledContact>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query {
    allDevPosts: allMdx(filter: { slug: { regex: "/developers/" }, frontmatter: { featured: { eq: true } } }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
            published
            featured
          }
        }
      }
    }

    allProjects: allMdx(filter: { slug: { regex: "/projects/" }, frontmatter: { featured: { eq: true } } }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
            published
            featured
          }
        }
      }
    }

    allWork: allMdx(filter: { frontmatter: { path: { eq: "/work/six12creative" } } }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
            published
            featured
          }
        }
      }
    }
  }
`

const StyledContact = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100%;

  @media (max-width: 775px) {
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

  @media (max-width: 775px) {
    label {
      padding: 0.5rem;

      span {
        padding: 0.5rem 0;
      }
    }
  }
`
